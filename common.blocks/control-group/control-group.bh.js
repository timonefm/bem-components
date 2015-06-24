module.exports = function(bh) {
    bh.match('control-group', function(ctx, json) {
        ctx.attrs({
            role : 'group',
            'aria-label' : json.ariaLabel
        });
    });
};
