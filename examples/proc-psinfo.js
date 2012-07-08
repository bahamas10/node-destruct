#!/usr/bin/env node
var destruct = require('../'),
    fs = require('fs'),
    fmt = 'iiiiiiiiiiIiiiiSSa8a8a8Z16Z80iiIIaa3iiiiii',
    file = '/proc/self/psinfo',
    keys = ['flag', 'nlwp', 'pid', 'ppid', 'pgid', 'sid', 'uid', 'euid', 'gid',
    'egid', 'addr', 'size', 'rssize', 'pad1', 'ttydev', 'pctcpu', 'pctmem', 'start',
    'time', 'ctime', 'fname', 'psargs', 'wstat', 'argc', 'argv', 'envp',
    'dmodel', 'pad2', 'taskid', 'projid', 'nzomb', 'poolid', 'zoneid', 'contract', 'filler'];

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
