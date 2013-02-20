/*jslint node: true */

module.exports = (function () {
    'use strict';

    // closure
    var url = require('url'),
        handlers = require('./dispatch.json');

    return function (uri) { // TODO: ugly names

        // TODO: regexp this
        return require('./handlers/' + handlers[url.parse(uri).pathname] + '.js');
    };
}());

// vim: filetype=javascript:tw=80:sw=4:ts=4:et:smarttab
