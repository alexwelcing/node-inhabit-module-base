'use strict';

global.__ark_app__ = { apps: [] };

var tape = require('tape'),
    TestModule = require('./TestModule');


tape('InhabitWidgetTest', function (t) {
    t.plan(1);

    t.equal(typeof TestModule, 'function', 'TestModule is a function');
});