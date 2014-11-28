# -*- coding: utf-8 -*-

"""
Created on 2014-11-28
:author: Andreas Kaiser (disko@binary-punks.com)
"""


def kotti_configure(settings):
    """ Add a line like this to you .ini file::

            kotti.configurators =
                kotti_website.kotti_configure

        to enable the ``kotti_website`` add-on.

    :param settings: Kotti configuration dictionary.
    :type settings: dict
    """

    settings['pyramid.includes'] += ' kotti_website'
    settings['kotti.fanstatic.view_needed'] += ' kotti_website.fanstatic.css_and_js'  # noqa


def includeme(config):
    """ Don't add this to your ``pyramid_includes``, but add the
    ``kotti_configure`` above to your ``kotti.configurators`` instead.

    :param config: Pyramid configurator object.
    :type config: :class:`pyramid.config.Configurator`
    """

    config.add_static_view('static-kotti_website', 'kotti_website:static')

    config.scan(__name__)
