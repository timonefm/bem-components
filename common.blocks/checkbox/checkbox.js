/**
 * @module checkbox
 */

modules.define('checkbox', ['i-bem__dom', 'control'], function(provide, BEMDOM, Control) {

/**
 * @exports
 * @class checkbox
 * @augments control
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, baseBlock : Control }, /** @lends checkbox.prototype */{
    onSetMod : {
        'checked' : function(modName, modVal) {
            this.domElem.attr('aria-checked', modVal || false);
            this.elem('control').prop(modName, modVal);
        },
        'disabled' : {
            'true' : function() {
                this.domElem.attr('aria-disabled', 'true');
            },
            '' : function() {
                this.domElem.removeAttr('aria-disabled');
            }
        }
    },

    _onChange : function() {
        this.setMod('checked', this.elem('control').prop('checked'));
    }
}, /** @lends checkbox */{
    live : function() {
        this.liveBindTo('control', 'change', this.prototype._onChange);
        return this.__base.apply(this, arguments);
    }
}));

});
