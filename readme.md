node-record-lpcm16中的录音是通过rec来实现的，
但是windows下的sox工具包里面不再包含 rec 工具，
如果在windows下运行改代码，需要修改`node_modules\node-record-lpcm16\index.js`中的部分代码
如下：

```
  switch (options.recordProgram) {
    // On some Windows machines, sox is installed using the "sox" binary
    // instead of "rec"
    case 'sox':
    case 'rec':
    default:
      //cmd = options.recordProgram
      // cmdArgs = [
      //   '-q',                     // show no progress
      //   '-r', options.sampleRate, // sample rate
      //   '-c', '1',                // channels
      //   '-e', 'signed-integer',   // sample encoding
      //   '-b', '16',               // precision (bits)
      //   '-t', 'wav',              // audio type
      //   '-',                      // pipe
      //       // end on silence
      //   'silence', '1', '0.1', options.thresholdStart || options.threshold + '%',
      //   '1', options.silence, options.thresholdEnd || options.threshold + '%'
      // ]

      var cmd = 'sox';
      var cmdArgs = [
        '-q',                                     // show no progress
        '-t', 'waveaudio',                        // input-type
        '-d',                                     // use default recording device
        '-r', options.sampleRate,                 // sample rate
        '-c', '1',                                // channels
        '-e', 'signed-integer',                   // sample encoding
        '-b', '16',                               // precision (bits)
        '-t', 'wav',                              // output-type
        '-'                                       // pipe
      ];
```
> [参考](https://github.com/gillesdemey/node-record-lpcm16/issues/8)


