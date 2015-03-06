module.exports = function(bh) {

    bh.match({
        'dropdown' : function(ctx) {
            ctx
                .js({ id : ctx.generateId() })
                .tParam('dropdown', ctx.json());

            return [{ elem : 'switcher' }, { elem : 'popup' }];
        },

        'dropdown__popup' : function(ctx) {
            var dropdown = ctx.tParam('dropdown'),
                popup = dropdown.popup;

            if(ctx.isSimple(popup) || popup.block !== 'popup') {
                popup = { block : 'popup', content : popup };
            }

            var popupMods = popup.mods || (popup.mods = {});
            popupMods.theme || (popupMods.theme = ctx.mod('theme'));
            popupMods.hasOwnProperty('autoclosable') || (popupMods.autoclosable = true);

            popupMods.target = 'anchor';

            popup.mix = dropdown;

            return popup;
        },

        'dropdown__switcher' : function(ctx) {
            var dropdown = ctx.tParam('dropdown'),
                switcher = dropdown.switcher;

            switcher.block && (switcher.mix = dropdown);

            return switcher;
        }
    });

};
