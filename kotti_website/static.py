# -*- coding: utf-8 -*-

from fanstatic import Library
from fanstatic import Resource
from kotti.static import base_css


lib = Library("kotti_website", "static")
css = Resource(lib,
               "css/kotti_website.css",
               depends=[base_css, ],
               minified="css/kotti_website.min.css",)
