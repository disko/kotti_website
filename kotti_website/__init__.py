# -*- coding: utf-8 -*-

from kotti.static import edit_needed
from kotti.static import view_needed
from static import css


def includeme(config):

    config.add_static_view('static-kotti_website', 'kotti_website:static')

    edit_needed.add(css)
    view_needed.add(css)
