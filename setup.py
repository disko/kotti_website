from setuptools import find_packages
from setuptools import setup
import os

version = '0.1'

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, 'README.txt')).read()
CHANGES = open(os.path.join(here, 'CHANGES.txt')).read()

requires = ['kotti>=0.7dev',
            'kotti_calendar',
            'kotti_gallery',
            'kotti_tinymce',
            'kotti_video',
            'psycopg2',
            'pyramid_debugtoolbar',
            'waitress', ]

setup(name='kotti_website',
      version=version,
      description="Kotti CMS Website",
      long_description="""Website of the Kotti Content Management System""",
      classifiers=["Programming Language :: Python",
                   "Framework :: Pylons",
                   "Topic :: Internet :: WWW/HTTP",
                   "Topic :: Internet :: WWW/HTTP :: WSGI :: Application", ],
      keywords='web pyramid pylons',
      author='Andreas Kaiser',
      author_email='disko@binary-punks.com',
      url='http://www.kotti-cms.org/',
      license='BSD-derived (http://www.repoze.org/LICENSE.txt)',
      packages=find_packages(exclude=['ez_setup', 'examples', 'tests']),
      include_package_data=True,
      zip_safe=False,
      install_requires=requires,
      entry_points="""
        [paste.app_factory]
        main = kotti_website:main
        [fanstatic.libraries]
        ffl = kotti_website.static:lib
      """,
      )
