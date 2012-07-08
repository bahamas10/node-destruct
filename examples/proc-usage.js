#!/usr/bin/env node
var destruct = require('../'),
    fs = require('fs'),
    fmt = 'iia8a8a8a8a8a8a8a8a8a8a8a8a8a8a48LLLLLLLLLLLLa40',
    file = '/proc/self/usage',
    keys = ['lwpid', 'count', 'tstamp', 'create', 'term', 'rtime', 'utime',
    'stime', 'ttime', 'tftime', 'dftime', 'kftime', 'ltime', 'slptime',
    'wtime', 'stoptime', 'filltime', 'minf', 'majf', 'nswap', 'inblk',
    'outblk', 'msnd', 'mrcv', 'sigs', 'vctx', 'ictx', 'sysc', 'ioch',
    'filler'];

fs.readFile(file, function(err, buf) {
  if (err) throw err;

  // Unpack the values
  unpacked = destruct.unpack(fmt, buf);

  // Merge the keys array with the unpacked values to make an associative array
  var ret = {};
  for (var i = 0; i < keys.length; i++) {
    ret[keys[i]] = unpacked[i];
  }

  // Print the result
  console.log(ret);
});
