// https://github.com/gillesdemey/node-record-lpcm16/issues/8

var record = require('node-record-lpcm16')
var fs = require('fs')

var file = fs.createWriteStream('test.wav', { encoding: 'binary' })

var config = {
  sampleRate : 44100,
  verbose : true    // 显示录音过程
}

record.start(config).pipe(file)

// Stop recording after three seconds
setTimeout(function () {
  record.stop()
}, 5000)

