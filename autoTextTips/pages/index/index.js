Page({
  data: {
    textAutoValue: '',//点击结果项之后替换到文本框的值
    textAutoArr: ["2号南", "2号北", "3号南", "1号北", "2号北", "3号北", "21号北"],//本地匹配的数组值，即后端传输过来的值
    textAutoShowArr: [] //根据输入动态变化的实时展示数组
  },
  onLoad: function () {
    
  },
  //键盘输入时触发的事件
  bindTextInput: function (e) {
    var realTimeInput = e.detail.value//实时输入的值
    var textAutoShowArr = []//匹配的结果
    //若实时输入的值不为空，判断输入值是否在本地数组中，存在则Push进textAutoShowArr数组中
    if (realTimeInput != "") {
      this.data.textAutoArr.forEach(function (e) {
        if (e.indexOf(realTimeInput) != -1) {
          textAutoShowArr.push(e)
        }
      })
    }
    if (textAutoShowArr.length != 0) {
      this.setData({
        textAutoShowArr: textAutoShowArr
      })
    } else {
      this.setData({
        textAutoShowArr: []
      })
    }
  },
  //点击选择实时展示的数组结果中一项。替换文本框的值
  onTextArrItemTap: function (e) {
    console.log(e)
    this.setData({
      textAutoValue: e.target.id,
      textAutoShowArr: []
    })
  },
})
