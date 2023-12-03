const time = new Date()

const returnTime = function (time) {
    alert('The current time is: ' + time)
  }

  const getTime = function (callback) {
    callback(time)
  }
  
  getTime(returnTime)