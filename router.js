/*jslint node: true */

module.exports = (function () {
    'use strict';

    // closure
    var url = require('url'),
        handlers = require('./routes.json'),
        handler;

    return function (request, response) {

        // TODO: regexp this
        handler = handlers[url.parse(request.url).pathname];
        if (handler) {
            process.stdout.write('found.\n');
            require('./handlers/' + handler + '.js')(request, response); // TODO: Cache these?
        }

        // 404
        process.stdout.write('404.\n');
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('404!\n');
    };
}());

// vim: filetype=javascript:tw=80:sw=4:ts=4:et:smarttab
