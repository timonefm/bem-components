/* global module */
module.exports = {
    block : 'page',
    title : 'Dist',
    mods : { theme : 'islands' },
    head : [{ elem : 'css', url : '../../dist/desktop/desktop.css' }],
    scripts : [{ elem : 'js', url : '../../dist/desktop/desktop.browser.js' }],
    content : [
        [
            {
                block : 'button',
                mods : { theme : 'islands', size : 's' },
                text : 'normal (size S)'
            },
            {
                block : 'button',
                mods : { theme : 'islands', size : 's', disabled : true },
                text : 'disabled'
            },
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', view : 'pseudo' },
                text : 'view pseudo (size M)'
            },
            {
                block : 'button',
                mods : { theme : 'islands', size : 'l', view : 'plain' },
                text : 'view plain (size L)'
            },
            {
                block : 'button',
                mods : { theme : 'islands', size : 'xl', view : 'action' },
                text : 'view action (size XL)'
            }
        ],

        [
            {
                block : 'attach',
                mods : { theme : 'islands', size : 's' },
                button : 'Load (size S)',
                noFileText : 'file is not selected'
            },
            {
                block : 'attach',
                mods : { theme : 'islands', size : 'm' },
                button : 'Load (size M)',
                noFileText : 'file is not selected'
            },
            {
                block : 'attach',
                mods : { theme : 'islands', size : 'l' },
                button : 'Load (size L)',
                noFileText : 'file is not selected'
            },
            {
                block : 'attach',
                mods : { theme : 'islands', size : 'xl', disabled : true },
                button : {
                    block : 'button',
                    mods : { theme : 'islands', size : 'xl' },
                    icon : { block : 'icon', mods : { action : 'download' } },
                    text : 'Disabled (size XL)'
                },
                noFileText : 'file is not selected'
            }
        ],

        [
            {
                block : 'checkbox-group',
                name : 'islands',
                mods : { theme : 'islands', size : 'l', type : 'line' },
                val : [ 2, 4 ],
                options : [
                    { val : 1, text : 'Small' },
                    { val : 2, text : 'Normal' },
                    { val : 3, text : 'Big', disabled : true },
                    { val : 4, text : 'Beautiful', disabled : true }
                ]
            },
            {
                block : 'radio-group',
                name : 'islands-radios-1',
                mods : { theme : 'islands', size : 'l', type : 'line' },
                val : 2,
                options : [
                    { val : 1, text : 'Radio is off' },
                    { val : 2, text : 'Radio is on' }
                ]
            },
            {
                block : 'radio-group',
                name : 'islands-radios-2',
                mods : { theme : 'islands', size : 'l', type : 'line' },
                val : 2,
                options : [
                    { val : 1, text : 'Disabled', disabled : true },
                    { val : 2, text : 'Disabled & checked', disabled : true }
                ]
            }
        ],

        [
            {
                block : 'checkbox-group',
                name : 'islands-button1',
                mods : { theme : 'islands', size : 'm', type : 'button' },
                val : [2, 4],
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second' },
                    { val : 3, text : 'third', disabled : true },
                    { val : 4, text : 'fourth', disabled : true }
                ]
            },
            {
                block : 'radio-group',
                name : 'islands-button1',
                mods : { theme : 'islands', size : 'm', type : 'button' },
                val : 2,
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second' },
                    { val : 3, text : 'third', disabled : true }
                ]
            }
        ],

        [
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm' },
                val : 'islands'
            },
            {
                block : 'input',
                mods : { theme : 'islands', 'has-clear' : true, size : 'm' },
                val : 'has-clear',
                placeholder : 'placeholder'
            },
            {
                block : 'input',
                mods : { theme : 'islands', 'has-clear' : true, size : 'l', type : 'password' },
                val : 'password',
                placeholder : 'password'
            },
            {
                block : 'input',
                mods : { theme : 'islands', 'has-clear' : true, size : 'xl', type : 'search' },
                val : 'search',
                placeholder : 'query'
            }
        ],

        [
            { tag : 'br' },
            {
                block : 'menu',
                mods : { theme : 'islands', size : 'm', mode : 'check' },
                content : [
                    {
                        elem : 'group',
                        title : 'Group 1',
                        content : [
                            {
                                block : 'menu-item',
                                mods : { checked : true },
                                content : 'item 1'
                            },
                            {
                                block : 'menu-item',
                                content : 'item 2'
                            }
                        ]
                    },
                    {
                        elem : 'group',
                        title : 'Group 2',
                        content : [
                            {
                                block : 'menu-item',
                                mods : { disabled : true },
                                content : 'item 3'
                            },
                            {
                                block : 'menu-item',
                                mods : { disabled : true, checked : true },
                                content : 'item 4'
                            }
                        ]
                    }
                ]
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm' },
                val : 'textarea',
                placeholder : 'placeholder'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm', disabled : true },
                placeholder : 'disabled'
            }
        ],

        {
            block : 'progressbar',
            mods : { theme : 'islands' },
            val : 25
        },

        ['s', 'm', 'l', 'xl'].map(function(size) {
            return {
                block : 'spin',
                attrs : { style : '-webkit-animation-play-state: paused; animation-play-state: paused;'},
                mods : { theme : 'islands', size : size, visible : true }
            };
        }),

        [
            {
                block : 'select',
                mods : { mode : 'check', theme : 'islands', size : 'm' },
                text : 'empty',
                val : [2, 5],
                options : [
                    {
                        group : [
                            { val : 1, text : 'first' },
                            { val : 2, text : 'second' },
                            { val : 3, text : 'third' }
                        ],
                        title : 'title of group 1'
                    },
                    {
                        group : [
                            { val : 4, text : 'fourth' },
                            { val : 5, text : 'fifth' },
                            { val : 6, text : 'sixth', disabled : true }
                        ]
                    }
                ]
            },
            {
                block : 'select',
                mods : { mode : 'radio', theme : 'islands', size : 'm' },
                name : 'select1',
                optionsMaxHeight : 100,
                val : 2,
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second' },
                    { val : 3, text : 'third' },
                    { val : 4, text : '4' },
                    { val : 5, text : '5' },
                    { val : 6, text : '6' },
                    { val : 7, text : '7' },
                    { val : 8, text : '8' },
                    { val : 9, text : '9' }
                ]
            },
            {
                block : 'select',
                mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
                name : 'select2',
                text : '—',
                options : [
                    {
                        val : 1,
                        text : 'Twitter',
                        checkedText : 'tw',
                        icon : { block : 'icon', mods : { social : 'twitter' } }
                    },
                    {
                        val : 2,
                        text : 'VKontakte',
                        checkedText : 'vk',
                        icon : { block : 'icon', mods : { social : 'vk' } }
                    }
                ]
            }
        ]
    ]
};
