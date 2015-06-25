modules.define(
    'spec',
    ['checkbox', 'i-bem__dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, Checkbox, BEMDOM, $, BEMHTML, chai) {

var expect = chai.expect;

describe('checkbox', function() {
    var checkbox;

    function buildCheckbox() {
        return BEMDOM.init($(BEMHTML.apply({
                block : 'checkbox',
                name : 'name',
                val : 'val',
                label : 'label'
            }))
            .appendTo('body'))
            .bem('checkbox');
    }

    beforeEach(function() {
        checkbox = buildCheckbox();
    });

    afterEach(function() {
        BEMDOM.destruct(checkbox.domElem);
    });

    describe('checked', function() {
        it('should properly update "control" elem "checked" attr', function() {
            checkbox
                .setMod('checked')
                .elem('control').prop('checked').should.be.true;

            checkbox
                .delMod('checked')
                .elem('control').prop('checked').should.be.false;
        });

        it('should switch "checked" mod on "change" event', function() {
            checkbox.elem('control')
                .prop('checked', true)
                .trigger('change');
            checkbox.hasMod('checked').should.be.true;

            checkbox.elem('control')
                .prop('checked', false)
                .trigger('change');
            checkbox.hasMod('checked').should.be.false;
        });

        it('should properly update "aria-checked" attribute', function() {
            checkbox
                .setMod('checked')
                .domElem.attr('aria-checked').should.be.equal('true');

            checkbox
                .delMod('checked')
                .domElem.attr('aria-checked').should.be.equal('false');
        });
    });

    describe('disabled', function () {
        it('should properly update "aria-disabled" attribute', function () {
            checkbox
                .setMod('disabled')
                .domElem.attr('aria-disabled').should.be.equal('true');

            checkbox.delMod('disabled');
            expect(checkbox.domElem.attr('aria-disabled')).to.be.undefined;
        });
    });
});

provide();

});
