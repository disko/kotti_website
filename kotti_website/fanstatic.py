# -*- coding: utf-8 -*-

"""
Created on 2014-11-28
:author: Andreas Kaiser (disko@binary-punks.com)
"""

from __future__ import absolute_import

from fanstatic import Group
from fanstatic import Library
from fanstatic import Resource


library = Library("kotti_website", "static")

view_css = Resource(
    library,
    "view.css",
    minified="view.min.css")
view_js = Resource(
    library,
    "view.js",
    minified="view.min.js")
view_needed = Group([view_css, view_js, ])

edit_css = Resource(
    library,
    "edit.css",
    depends=[view_css, ],
    minified="edit.min.css")
edit_js = Resource(
    library,
    "edit.js",
    depends=[view_js, ],
    minified="edit.min.js")
edit_needed = Group([edit_css, edit_js, ])
