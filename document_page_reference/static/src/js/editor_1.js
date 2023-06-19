/** @odoo-module **/
import field_registry from 'web.field_registry';
import FieldTextHtmlSimple from "web_editor.field.html";

const FieldDocumentPage = FieldTextHtmlSimple.extend({
    events: _.extend({}, FieldTextHtmlSimple.prototype.events, {
        "click .oe_direct_line": "_onClickDirectLink",
    }),
    _onClickDirectLink: function (event) {
        var self = this;
        event.preventDefault();
        event.stopPropagation();
        var element = $(event.target).closest(".oe_direct_line")[0];
        var default_reference = element.name;
        var model = $(event.target).data("t-att-data-oe-model");
        var id = $(event.target).data("t-att-data-oe-id");
        var context = this.record.getContext(this.recordParams);
        if (default_reference) {
            context.default_reference = default_reference;
        }
        this._rpc({
            model: model,
            method: "get_formview_action",
            args: [[parseInt(id, 10)]],
            context: context,
        }).then(function (action) {
            self.trigger_up("do_action", {action: action});
        });
    },
});

field_registry.add("document_page_reference", FieldDocumentPage);

export default FieldDocumentPage