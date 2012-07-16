(De) Struct
===========

Easily unpack C Structs and binary buffers

Based off the `unpack` function in Perl, and inspired by [prustat][1]
by [Brendan Gregg][2].  There were other modules that claimed to have the same functionality,
but most of them were too poorly documented with the source code almost unreadable, while the
others were overcomplicated and didn't support a simple format string.

Install
------

Install locally to use as a module

    npm install destruct

Usage
-----

as a module

``` js
var destruct = require('destruct');
```

Known Limitations
-----------------

This module does not handle all data types, it has only been tested on SmartOS,
and was built for making it easier to extend the [proc][3] Node module by [@dshaw][4].

Functions
---------

### destruct.unpack(fmt, buf, [pos])

Unpack a given binary buffer with the given format starting from `pos` (default 0)

Example
-------

``` js
var destruct = require('destruct'),
    fs = require('fs'),
    fmt = 'iiiiiiiiiiIiiiiSSa8a8a8Z16Z80iiIIaa3iiiiii',
    file = '/proc/self/psinfo';

fs.readFile(file, function(err, buf) {
  console.log(destruct.unpack(fmt, buf));
});
```

yields

``` js
[ 33554432,
  3,
  714,
  18456,
  714,
  18456,
  2011,
  2011,
  2300,
  2300,
  0,
  14536,
  9736,
  0,
  1572868,
  11,
  3,
  <Buffer 64 41 f9 4f 3b fe 6c 1a>,
  <Buffer 00 00 00 00 35 d5 31 0b>,
  <Buffer 00 00 00 00 00 00 00 00>,
  'node',
  'node ./psinfo.js',
  0,
  2,
  134511788,
  134511800,
  <Buffer 01>,
  <Buffer 00 00 00>,
  674523,
  3,
  0,
  0,
  29,
  19167112 ]
```

License
-------

MIT Licensed

[1]: http://www.brendangregg.com/DTrace/prustat
[2]: http://www.brendangregg.com
[3]: https://github.com/dshaw/proc
[4]: https://github.com/dshaw

