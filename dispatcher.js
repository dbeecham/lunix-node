/*jslint node: true */

module.exports = (function () {
    'use strict';

    // closure
    var url = require('url'),
        handlers = require('./dispatch.json'),
        handler;

    return function (uri) { // TODO: ugly names

        // TODO: regexp this
        handler = handlers[url.parse(uri).pathname];
        if (handler) {
            return require('./handlers/' + handlers[url.parse(uri).pathname] + '.js');
        }

        return function (request, response) { // Handle this better.
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('404!\n');
        };
    };
}());

// vim: filetype=javascript:tw=80:sw=4:ts=4:et:smarttab
