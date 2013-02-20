/*jslint node: true */

module.exports = function (request, response) {
    'use strict';
    response.writeHead({'Content-Type': 'text/plain'});
    response.end('Hello, world.\n');
};

// vim: filetype=javascript:tw=80:sw=4:ts=4:et:smarttab
