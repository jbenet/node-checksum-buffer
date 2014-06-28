var CkBuffer = require('./')

// let's make some data
var buf = new Buffer('beep boop')
console.log('buffer: ' + buf.inspect())

// let's checksum that data
var ckbuf = new CkBuffer(buf, 'sha1')
console.log('ckbuffer: ' + ckbuf.buffer.inspect())

// check if the checksum passes
console.log('ok? ' + ckbuf.check())

// get the checksum only
console.log('checksum: ' + ckbuf.checksum().inspect())

// get the raw data back
var data = ckbuf.data()
console.log('data: ' + data.inspect())

// Oooh! let's mess with the data!
data[data.length - 1] = 0x00
console.log(ckbuf.buffer)
console.log('ok? ' + ckbuf.check())

// you can write to the data buffer
data.write('boop beep')
console.log('new data: ' + data.inspect())

// but make sure to recalculatea
console.log('ok? ' + ckbuf.check())
console.log('new cksum: ' + ckbuf.recalculate().inspect())
console.log('ok? ' + ckbuf.check())
