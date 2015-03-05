module.exports = function(bh) {
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
