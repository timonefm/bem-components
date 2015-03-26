/* jshint ignore:start */
var content = require('./dist-etalon.bemjson.js').content;

/* predef module */
module.exports = {
    block : 'page',
    title : 'Dist',
    mods : { theme : 'islands' },
    head : [{ elem : 'css', url : '../../dist/desktop/bem-components.css' }],
    scripts : [
        { elem : 'js', url : '../../dist/desktop/bem-components.js+bemhtml.js' },
        { elem : 'js', content : [
            'modules.require(["jquery", "BEMHTML"], function($, BEMHTML) {',
            '   var json = ' + JSON.stringify(content) + ';',
            '   $(".page").append(BEMHTML.apply(json));',
            '});'
        ]}
    ],
    attrs : { style : 'width:1000px;' }
};
/* jshint ignore:end */
