Page({
  data: {
    input: '',
    todos: [],
    leftCount: 0,
    allCompleted: false,
    logs: []
  },

  // 同步到本地缓存
  save: function () {
    // 设置本地缓存 把数据存放在本地缓存之中 同步本地缓存
    wx.setStorageSync('todo_list', this.data.todos)
    wx.setStorageSync('todo_logs', this.data.logs)
  },

  // 初始化
  load: function () {
    // 获取本地缓存 
    var todos = wx.getStorageSync('todo_list')
    if (todos) {
      var leftCount = todos.filter(function (item) {
        return !item.completed
      }).length
      this.setData({ todos: todos, leftCount: leftCount })
    }
    var logs = wx.getStorageSync('todo_logs')
    if (logs) {
      this.setData({ logs: logs })
    }
  },

  // 初始化
  onLoad: function () {
    this.load()
  },

  // 输入事件同步
  inputChangeHandle: function (e) {
    this.setData({ input: e.detail.value })
  },

  // 添加一个任务清单
  addTodoHandle: function (e) {
    // 如果任务标题不为空 
    if (!this.data.input || !this.data.input.trim()) return
    var todos = this.data.todos
    todos.push({ name: this.data.input, completed: false })
    var logs = this.data.logs
    logs.push({ timestamp: new Date(), action: 'Add', name: this.data.input })
    this.setData({
      input: '',
      todos: todos,
      leftCount: this.data.leftCount + 1,
      logs: logs
    })
    this.save()
  },

  // 选中
  toggleTodoHandle: function (e) {
    var index = e.currentTarget.dataset.index
    var todos = this.data.todos
    todos[index].completed = !todos[index].completed
    var logs = this.data.logs
    logs.push({
      timestamp: new Date(),
      action: todos[index].completed ? 'Finish' : 'Restart',
      name: todos[index].name
    })
    this.setData({
      todos: todos,
      leftCount: this.data.leftCount + (todos[index].completed ? -1 : 1),
      logs: logs
    })
    this.save()
  },

  // 删除
  removeTodoHandle: function (e) {
    var index = e.currentTarget.dataset.index
    var todos = this.data.todos
    var remove = todos.splice(index, 1)[0]
    var logs = this.data.logs
    logs.push({ timestamp: new Date(), action: 'Remove', name: remove.name })
    this.setData({
      todos: todos,
      leftCount: this.data.leftCount - (remove.completed ? 0 : 1),
      logs: logs
    })
    this.save()
  },

  // 全选或者反选
  toggleAllHandle: function (e) {
    this.data.allCompleted = !this.data.allCompleted
    var todos = this.data.todos
    for (var i = todos.length - 1; i >= 0; i--) {
      todos[i].completed = this.data.allCompleted
    }
    var logs = this.data.logs
    logs.push({
      timestamp: new Date(),
      action: this.data.allCompleted ? 'Finish' : 'Restart',
      name: 'All todos'
    })
    this.setData({
      todos: todos,
      leftCount: this.data.allCompleted ? 0 : todos.length,
      logs: logs
    })
    this.save()
  },
  
  // 清除所有
  clearCompletedHandle: function (e) {
    var todos = this.data.todos
    var remains = []
    for (var i = 0; i < todos.length; i++) {
      todos[i].completed || remains.push(todos[i])
    }
    var logs = this.data.logs
    logs.push({
      timestamp: new Date(),
      action: 'Clear',
      name: 'Completed todo'
    })
    this.setData({ todos: remains, logs: logs })
    this.save()
  }
})
