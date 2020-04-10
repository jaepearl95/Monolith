
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const sport = new SerialPort('/dev/ttyS0')

const parser = sport.pipe(new Readline({ delimiter: '\r\n' }))
parser.on('data', console.log)

