module.exports = function(bh) {

    bh.match('dropdown', function(ctx, json) {
        var id = ctx.generateId();

        ctx.tParam('mods', ctx.mods());

        return [
            { elem : 'switcher', content : json.switcher, id : id },
            { elem : 'popup', popup : json.popup, id : id }
        ];
    });

    bh.match('dropdown__popup', function(ctx, json) {
        var popup = json.popup;

        if(ctx.isSimple(popup) || popup.block !== 'popup') {
            popup = { block : 'popup', content : popup };
        }

        var popupMods = popup.mods || (popup.mods = {});
        popupMods.theme || (popupMods.theme = ctx.mod('theme'));
        popupMods.hasOwnProperty('autoclosable') || (popupMods.autoclosable = true);

        popupMods.target = 'anchor';

        popup.mix = { block : 'dropdown', mods : ctx.tParam('mods'), js : { id : json.id } };

        return popup;
    });

    bh.match('dropdown__switcher', function(ctx, json) {
        var content = ctx.content();

        content.block && (content.mix = {
            block : 'dropdown',
            mods : ctx.tParam('mods'),
            js : { id : json.id }
        });

        return content;
    });

};
