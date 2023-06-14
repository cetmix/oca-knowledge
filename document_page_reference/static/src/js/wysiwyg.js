odoo.define('document_page_reference.wysiwyg', function (require) {
    'use strict';

    var Wysiwyg = require('web_editor.wysiwyg');
    // var Link = require('web_editor.wysiwyg.widgets.Link');
    // var Widget = require('document_page_reference.widgets');
    var core = require('web.core');

    var _t = core._t;

    const DocumentPageReferenceWysiwyg = Wysiwyg.extend({
        // /**
        //  * @override
        //  **/
        // startEdition: function () {
        //     const self = this;
        //     return this._super.apply(this, arguments).then(function () {
        //         // Prevent selection change outside of snippets.
        //         self.$editable.on('mousedown', function (e) {
        //             if ($(e.target).is('.o_editable:empty') || e.target.querySelector('.o_editable')) {
        //                 e.preventDefault();
        //             }
        //         });
        //     });
        // },
        // startEdition: async function () {
        //     const _super = this._super.bind(this);
        //     if (!this.options.inIframe) {
        //         return _super();
        //     } else {
        //         await this._loadIframe();
        //         return _super();
        //     }
        // },

        /**
         * @override
         */
        _getPowerboxOptions: function () {
            var options = this._super.apply(this, arguments);
            options.commands.push({
                name: _t('Add a page link'),
                category: _t('Navigation'),
                description: _t('Add a link to a page'),
                fontawesome: 'fa-external-link',
                priority: 50,
                // callback: function () {
                //     // Custom logic for adding a page link
                //     var self = this;
                //     var widget = Link(self, self.field, {});
                //     widget.appendTo(self.$el);

                // },
                callback: function () {
                    this.toggleLinkTools({forceDialog: true});
                }
            });
            return options;
        },
    });

    return DocumentPageReferenceWysiwyg;
});

