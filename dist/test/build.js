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
            '<link href="../lib/mocha.css" rel="stylesheet" />' +
            '<link href="../../' + platform + '/bem-components.css" rel="stylesheet" />' +
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
        html += specs.sort(function (str1, str2) {
            var s1 = str1.split('/'),
                s2 = str2.split('/'),
                b1 = s1[1],
                b2 = s2[1];

            if(b1 === 'popup' && b2 === 'menu') {
                return -1;
            }

            if(b1 === 'menu' && b2 === 'popup') {
                return 1;
            }

            if(b1 && b2 && b1 === b2 && s1[2] && s2[2]) {
                if(s1[2].charAt(0) === '_' && s2[2].charAt(0) !== '_') {
                    return 1;
                }

                if(s2[2].charAt(0) === '_' && s1[2].charAt(0) !== '_') {
                    return -1;
                }

                return 0;
            }

            return str1.localeCompare(str2);
        }).map(function (url) {
            return '<script src="../../../' + url + '"></script>';
        }).join('\n');

        html +=
            '</head><body>' +
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
