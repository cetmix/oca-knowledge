# Copyright 2019 Creu Blanca
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

{
    "name": "Document Page Reference",
    "summary": """
        Include references on document pages""",
    "version": "16.0.1.0.0",
    "license": "AGPL-3",
    "author": "Creu Blanca,Odoo Community Association (OCA)",
    "website": "https://github.com/OCA/knowledge",
    "depends": ["document_page", "web_editor"],
    "data": [
        "views/document_page.xml",
        "views/report_document_page.xml",
        "views/assets.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "document_page_reference/static/src/js/editor_1.js",
        ],
        'web_editor.assets_wysiwyg': [
            # 'document_page_reference/static/src/js/wysiwyg.js',
        ],
    },
    "maintainers": ["etobella"],
}
