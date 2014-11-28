# -*- coding: utf-8 -*-

"""
Created on 2014-11-28
:author: Andreas Kaiser (disko@binary-punks.com)
"""


class BaseView(object):
    """ Base class for views """

    def __init__(self, context, request):
        """ Constructor

        :param context: Context of the view
        :type context: :class:`kotti.resources.Content`

        :param request: Current request
        :type request: :class:`pyramid.request.Request`
        """

        super(BaseView, self).__init__()

        self.context = context
        self.request = request
