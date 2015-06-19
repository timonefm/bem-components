module.exports = function(bh) {

    bh.match({
        'dropdown' : function(ctx) {
            var dropdown = ctx.json(),
                dropdownMix = dropdown.mix,
                switcherMix = dropdown.switcher.mix || [];

            Array.isArray(switcherMix) || (switcherMix = [switcherMix]);

            ctx
                .js(ctx.extend({ id : ctx.generateId() }, ctx.js()))
                .tParam('dropdown', dropdown)
                .tParam('theme', ctx.mod('theme'))
                .tParam('mix', switcherMix.concat(dropdownMix?
                    Array.isArray(dropdownMix)?
                        dropdownMix.concat([dropdown]) :
                        [dropdownMix, dropdown] :
                    dropdown));

            return [{ elem : 'switcher' }, { elem : 'popup' }];
        },

        'dropdown__popup' : function(ctx) {
            var dropdown = ctx.tParam('dropdown'),
                popup = dropdown.popup;

            if(ctx.isSimple(popup) || popup.block !== 'popup') {
                popup = { block : 'popup', content : popup };
            }

            var popupMods = popup.mods || (popup.mods = {});
            popupMods.theme || (popupMods.theme = ctx.tParam('theme'));
            popupMods.hasOwnProperty('autoclosable') || (popupMods.autoclosable = true);

            popupMods.target = 'anchor';

            var popupMix = popup.mix || [];
            Array.isArray(popupMix) || (popupMix = [popupMix]);
            popup.mix = popupMix.concat([dropdown]);

            return popup;
        },

        'dropdown__switcher' : function(ctx) {
            var dropdown = ctx.tParam('dropdown'),
                switcher = dropdown.switcher;

            switcher.block && (switcher.mix = ctx.tParam('mix'));

            return switcher;
        }
    });

};
