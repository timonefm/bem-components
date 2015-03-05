module.exports = function(bh) {

    bh.match('dropdown', function(ctx, json) {
        var id = ctx.generateId();

        ctx.tParam('mods', ctx.mods());

        return [
            { elem : 'switcher', content : json.switcher, id : id },
            { elem : 'popup', popup : json.popup, id : id }
        ];
    });

};
