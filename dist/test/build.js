var fs = require('fs'),
    path = require('path'),
    walk = require('bem-walk'),
    platforms = ['desktop', 'touch-pad', 'touch-phone'],
    fixtures = path.join(__dirname, 'fixtures'),
    levels = {
        desktop : [
            'libs/bem-core/common.blocks',
            'libs/bem-core/desktop.blocks',
            'common.blocks',
            'desktop.blocks'
        ],
        'touch-pad' : [
            'libs/bem-core/common.blocks',
            'libs/bem-core/touch.blocks',
            'common.blocks',
            'touch.blocks',
            'touch-pad.blocks'
        ],
        'touch-phone' : [
            'libs/bem-core/common.blocks',
            'libs/bem-core/touch.blocks',
            'common.blocks',
            'touch.blocks',
            'touch-phone.blocks'
        ]
    };

platforms.forEach(function (platform) {
    var walker = walk(levels[platform]),
        specs = [],
        html = '<html><head><meta charset="utf-8">' +
            '<script src="../../' + platform + '/bem-components' + '.js+bemhtml.js"></script>' +
            '<script src="../lib/mocha.js"></script>' +
            '<script src="../lib/sinon.js"></script>' +
            '<script src="../lib/chai.js"></script>' +
            '<script src="../lib/sinon-chai.js"></script>' +
            '<script src="../lib/spec.js"></script>';

    walker.on('data', function (data) {
        if(data.tech === 'spec.js' && data.path.indexOf('libs') !== 0) {
            specs.push(data.path);
        }
    });

    walker.on('end', function () {
        html += specs.map(function (url) {
            return '<script src="../../../' + url + '"></script>';
        }).join('\n');

        html +=
            '</head>' +
            '<div id="mocha"></div>' +
            '<script>(function() {' +
                'var global = this;' +
                'typeof modules === "object"?' +
                '  modules.require(["jquery", "mocha", "spec"], function($, mocha) {' +
                '    init($, mocha);' +
                '  }) : ' +
                '  init(global.jQuery, global.mocha);' +
                'function init($, mocha) {' +
                '  global.mochaPhantomJS? global.mochaPhantomJS.run(done) : mocha.run(done);' +
                '  function done() { $("#mocha").show() }' +
                '}' +
                '}());' +
            '</script>' +
        '</body></html>';

        fs.existsSync(fixtures) || fs.mkdirSync(fixtures);
        fs.writeFileSync(path.join(fixtures, platform + '.html'), html, 'utf-8');
    });
});
