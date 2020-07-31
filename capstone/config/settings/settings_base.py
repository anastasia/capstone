import os
from copy import deepcopy


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SERVICES_DIR = os.path.join(os.path.dirname(BASE_DIR), 'services')


ALLOWED_HOSTS = ['localhost', '127.0.0.1', '[::1]', '.test']

ADMINS = [('Caselaw Access Project', 'info@case.law')]

AUTH_USER_MODEL = 'capapi.CapUser'
LOGIN_REDIRECT_URL = '/'

# Application definition

INSTALLED_APPS = [
    # built in
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.postgres',

    'django_filters',
    'django_extensions',
    'rest_framework',
    'rest_framework.authtoken',
    'compressor',
    'rest_framework_filters',
    'pipeline',

    # ours
    'capdb',
    'capapi',
    'django_sql_trace',
    'capweb',
    'cite',
    'user_data',

    # 3rd party
    'storages',  # http://django-storages.readthedocs.io/en/latest/index.html
    'db_file_storage', # for CMS images
    'simple_history',   # model versioning
    'bootstrap4',   # bootstrap form rendering
    'drf_yasg',   # API specification
    'django_hosts',     # subdomain routing
    'webpack_loader',   # webpack assets
    'elasticsearch_dsl',
    'django_elasticsearch_dsl',
    'django_elasticsearch_dsl_drf',
    'capture_tag',
]

REST_FRAMEWORK = {
    'PAGE_SIZE': 100,
    'DEFAULT_PAGINATION_CLASS': 'capapi.pagination.CapPagination',
    'DEFAULT_FILTER_BACKENDS': (
        'rest_framework_filters.backends.RestFrameworkFilterBackend',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'capapi.authentication.TokenAuthentication',
        'capapi.authentication.SessionAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'capapi.permissions.IsSafeMethodsUser',
    ),
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
        'capapi.renderers.BrowsableAPIRenderer',
    ),
}

MIDDLEWARE = [

    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',

    # docs say this should come "first", though we're not putting it quite that early
    'django_hosts.middleware.HostsRequestMiddleware',

    # cache middleware should come before:
    # - CsrfViewMiddleware, to skip caching on views that use csrf
    # - SessionMiddleware, to skip caching on views that set session cookies
    # cache middleware should come after:
    # - WhiteNoiseMiddleware, because whitenoise already sets cache headers on static assets
    'capapi.middleware.cache_header_middleware',

    'capapi.middleware.GZipJsonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'capapi.middleware.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'capapi.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    # docs say this should come last
    'django_hosts.middleware.HostsResponseMiddleware',
]

ROOT_URLCONF = 'config.urls'

### subdomain settings
ROOT_HOSTCONF = 'config.hosts'
PARENT_HOST = 'case.test:8000'
SESSION_COOKIE_DOMAIN = '.case.test'  # make sure cookies are visible from all hosts
DEFAULT_HOST = 'default'  # which key from HOSTS is used by default if no host is specified for reverse()
# used in config.hosts to set up our subdomains:
HOSTS = {
    'default': {
        'subdomain': '',
        'urlconf': 'config.urls',
    },
    'api': {
        'subdomain': 'api',
        'urlconf': 'capapi.api_urls',
    },
    'cite': {
        'subdomain': 'cite',
        'urlconf': 'cite.urls',
    },
}
API_HOST_OVERRIDE = None
# useful for pointing dev JS at prod API for testing. E.g., add this to settings.py:
# API_HOST_OVERRIDE = 'https://api.case.law'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'capapi', 'templates'),
                 os.path.join(BASE_DIR, 'capweb', 'templates')], # required by DRF for some reason
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
            'builtins': [
                'django_hosts.templatetags.hosts_override',
            ]
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'capapi',
        'USER': 'postgres',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '',
    },
    'capdb': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'capdb',
        'USER': 'postgres',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '',
    },
    'user_data': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'cap_user_data',
        'USER': 'postgres',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '',
    },
}

# make sure tracking_tool and capdb apps use the correct DBs:
DATABASE_ROUTERS = [
    'capdb.routers.CapDBRouter',
    'user_data.routers.UserDataRouter',
]

# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'compressor.finders.CompressorFinder',
    'pipeline.finders.PipelineFinder',
)

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]

STATICFILES_STORAGE = 'pipeline.storage.PipelineCachedStorage'

PIPELINE = {
    'COMPILERS': (
        'libsasscompiler.LibSassCompiler',
    ),
    'STYLESHEETS': {
        'base': {
            'source_filenames': (
                'css/scss/base.scss',
            ),
            'output_filename': 'base.css'
        },
        'index': {
            'source_filenames': (
                'css/scss/index.scss',
            ),
            'output_filename': 'index.css'
        },
        'about': {
            'source_filenames': (
                'css/scss/about.scss',
            ),
            'output_filename': 'about.css'
        },
        'bulk': {
            'source_filenames': (
                'css/scss/bulk.scss',
            ),
            'output_filename': 'bulk.css'
        },
        'gallery': {
            'source_filenames': (
                'css/scss/gallery.scss',
            ),
            'output_filename': 'gallery.css'
        },
        'contact': {
            'source_filenames': (
                'css/scss/contact.scss',
            ),
            'output_filename': 'contact.css'
        },
        'docs': {
            'source_filenames': (
                'css/scss/docs.scss',
            ),
            'output_filename': 'docs.css'
        },
        'registration': {
            'source_filenames': (
                'css/scss/registration.scss',
            ),
            'output_filename': 'registration.css'
        },
        'api': {
            'source_filenames': (
                'css/scss/api.scss',
            ),
            'output_filename': 'api.css'
        },
        'case_editor': {
            'source_filenames': {
                'css/scss/case_editor.scss',
            },
            'output_filename': 'case_editor.css'
        },
        'case': {
            'source_filenames': {
                'css/scss/case.scss',
            },
            'output_filename': 'case.css'
        },
        'case_cited_by': {
            'source_filenames': {
                'css/scss/case_cited_by.scss',
            },
            'output_filename': 'case_cited_by.css'
        },
        'search': {
            'source_filenames': {
                'css/scss/search.scss',
            },
            'output_filename': 'search.css'
        },
        'view_metadata': {
            'source_filenames': {
                'css/scss/view_metadata.scss',
            },
            'output_filename': 'view_metadata.css'
        },
        'trends': {
            'source_filenames': {
                'css/scss/trends.scss',
            },
            'output_filename': 'trends.css'
        },
        'cite': {
            'source_filenames': {
                'css/scss/cite.scss',
            },
            'output_filename': 'cite.css'
        },
        'file_download': {
            'source_filenames': {
                'css/scss/file_download.scss',
            },
            'output_filename': 'file_download.css'
        },
        'cite-grid': {
            'source_filenames': {
                'css/scss/cite-grid.scss',
            },
            'output_filename': 'cite-grid.css'
        },
    },

    # avoid compressing assets for now
    'CSS_COMPRESSOR': None,
    'JS_COMPRESSOR': None,
}

# define storages
# each of these can be imported from capdb.storages, e.g. `from capdb.storages import ingest_storage`

STORAGES = {
    'ingest_storage': {
        'class': 'CapFileStorage',
        'kwargs': {
            'location': os.path.join(BASE_DIR, 'test_data/from_vendor'),
        },
    },
    'private_ingest_storage': {
        'class': 'CapFileStorage',
        'kwargs': {
            'location': os.path.join(BASE_DIR, 'test_data/from_vendor'),
        },
    },
    'inventory_storage': {
        'class': 'CapFileStorage',
        'kwargs': {
            'location': os.path.join(BASE_DIR, 'test_data/inventory'),
        },
    },
    'private_inventory_storage': {
        'class': 'CapFileStorage',
        'kwargs': {
            'location': os.path.join(BASE_DIR, 'test_data/inventory'),
        },
    },
    'captar_storage': {
        'class': 'CapFileStorage',
        'kwargs': {
            'location': os.path.join(BASE_DIR, 'test_data/zips'),
        },
    },
    'pdf_storage': {
        'class': 'CapFileStorage',
        'kwargs': {
            'location': os.path.join(BASE_DIR, 'test_data/pdfs'),
        },
    },
    'bulk_export_storage': {
        'class': 'CapFileStorage',
        'kwargs': {
            'location': os.path.join(BASE_DIR, 'test_data/bulk-data'),
        },
    },
    'case_image_storage': {
        'class': 'CapFileStorage',
        'kwargs': {
            'location': os.path.join(BASE_DIR, 'test_data/case-images'),
        },
    },
    'transfer_storage': {
        'class': 'CapFileStorage',
        'kwargs': {
            'location': os.path.join(BASE_DIR, 'test_data/xfer'),
        }
    },
    'ngram_storage': {
        'class': 'CapFileStorage',
        'kwargs': {
            'location': os.path.join(BASE_DIR, 'test_data/ngrams'),
        }
    },
    'download_files_storage': {
        'class': 'DownloadOverlayStorage',
        'kwargs': {
            'location': os.path.join(BASE_DIR, 'test_data/downloads'),
            'base_url': 'http://case.test:8000/download/',
        }
    },
}

INVENTORY = {
    # prefix to strip from paths in manifest.json
    'manifest_path_prefix': 'inventory/',
    'private_manifest_path_prefix': 'inventory/',
}

GEOIP_PATH = os.path.join(BASE_DIR, 'test_data/GeoLite2-City.mmdb')

### CELERY ###
from celery.schedules import crontab
CELERY_BROKER_URL = 'redis://'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_RESULT_BACKEND = 'redis://'
CELERY_TASK_SERIALIZER = 'json'
CELERY_BEAT_SCHEDULE = {
    'handle-site-limits': {
        'task': 'capapi.tasks.daily_site_limit_reset_and_report',
        'schedule': crontab(hour=0, minute=0),
    },
    'update-elasticsearch': {
        'task': 'capdb.tasks.update_elasticsearch_from_queue',
        'schedule': crontab(),
    },
}
CELERY_TIMEZONE = 'UTC'

### CAP API settings ###

API_CASE_DAILY_ALLOWANCE = 500
API_CASE_EXPIRE_HOURS = 24
API_BASE_URL_ROUTE = '/api'
API_VERSION = 'v1'
API_DOCS_CASE_ID = 2
API_FULL_URL = os.path.join(API_BASE_URL_ROUTE, API_VERSION)
API_CASE_FILE_TYPE = '.xml'

# CACHES
CACHED_COUNT_TIMEOUT = 60*60*24*7  # 'count' value in API responses is cached for up to 7 days
CACHED_LIL_DATA_TIMEOUT = 60*60*24  # news and contributor data from LIL site is cached once a day
LIVE_COUNT_TIME_LIMIT = 2  # number of seconds to try to generate a count while preparing an API response
TASK_COUNT_TIME_LIMIT = 120  # number of seconds to try to generate a count in background task

# DATA VISUALIZATION
DATA_COUNT_DIR = '/tmp/count-data'

# EMAIL
EMAIL_USE_TLS = True
EMAIL_HOST = 'localhost'
EMAIL_PORT = 25
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
EMAIL_HOST_USER = 'user-secret'
EMAIL_HOST_PASSWORD = 'secret-secret'
DEFAULT_FROM_EMAIL = 'info@example.com'
SERVER_EMAIL = 'info@example.com'

# redis
REDIS_HOST = 'localhost'
REDIS_PORT = 6379
# redis by default has 16 databases, numbered 0-15:
REDIS_DEFAULT_DB = 0
REDIS_INGEST_DB = 1         # database for temporary data created during the S3 ingest process
REDIS_DJANGO_CACHE_DB = 2   # database for django's cache framework

# logging
# import and modify Django's default logging so we can cleanly override its default behavior --
# see https://lincolnloop.com/blog/disabling-error-emails-django/ for discussion of this approach
from django.utils.log import DEFAULT_LOGGING
LOGGING = deepcopy(DEFAULT_LOGGING)
LOGGING['handlers'] = {
    **LOGGING['handlers'],
    # log everything to console on both dev and prod
    'console': {
        'level': 'DEBUG',
        'class': 'logging.StreamHandler',
        'formatter': 'verbose',
    },
    # custom error email template
    'mail_admins': {
        'level': 'ERROR',
        'filters': ['require_debug_false'],
        'class': 'capapi.reporter.CustomAdminEmailHandler'
    },
}
LOGGING['loggers'] = {
    **LOGGING['loggers'],
    # only show warnings for third-party apps
    '': {
        'level': 'WARNING',
        'handlers': ['console', 'mail_admins'],
    },
    # disable django's built-in handlers to avoid double emails
    'django': {'level': 'WARNING'},
    'celery': {'level': 'INFO'},
    # show info for our first-party apps
    **{
        app_name: {'level': 'INFO'}
        for app_name in ('capapi', 'capdb', 'capweb', 'cite', 'config', 'user_data')
    },
}
LOGGING['formatters'] = {
    **LOGGING['formatters'],
    'verbose': {
        'format': '%(asctime)s [%(process)d] [%(levelname)s] %(pathname)s:%(lineno)s %(message)s',
        'datefmt': '%Y-%m-%d %H:%M:%S'
    },
}


# if celery is launched with --autoscale=1000, celery will autoscale to 1000 but limited by system resources:
CELERY_WORKER_AUTOSCALER = 'celery_resource_autoscaler:ResourceAutoscaler'
CELERY_RESOURCE_LIMITS = [
    {
        'class': 'celery_resource_autoscaler:MemoryLimit',
        'kwargs': {'max_memory': 0.8},
    },
    {
        'class': 'celery_resource_autoscaler:CPULimit',
        'kwargs': {'max_load': 0.8},
    },
]

# security
SECURE_CONTENT_TYPE_NOSNIFF = True
MAKE_HTTPS_URLS = True
PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.PBKDF2PasswordHasher',
]

SILENCED_SYSTEM_CHECKS = [
    "models.E004"   # For our history tables, the "id" field should not be a primary key. This disables the Django system
                    # check that required "id" fields to be primary keys.
]
SIMPLE_HISTORY_FILEFIELD_TO_CHARFIELD = True

# cache headers
SET_CACHE_CONTROL_HEADER = False  # whether to set a cache-control header on all cacheable views
CACHE_CONTROL_DEFAULT_MAX_AGE = 60*60*24  # length of time to cache pages by default, in seconds

# settings for scripts/compress_volumes.py
COMPRESS_VOLUMES_THREAD_COUNT = 20   # if < 2, no thread pool will be used
COMPRESS_VOLUMES_SKIP_EXISTING = True  # don't process volumes that already exist in the dest dir; if False, will create additional files with random suffixes

# override django-storages default
AWS_DEFAULT_ACL = 'private'

# set the default login
LOGIN_URL = 'login'

# directories to search for nltk data
NLTK_PATH = [os.path.join(SERVICES_DIR, 'nltk')]

NGRAM_THREAD_COUNT = 4

# feature flags
SCREENSHOT_FEATURE = False
GEOLOCATION_FEATURE = False
CASE_PDF_FEATURE = False

HARVARD_IP_RANGES = """
    12.0.48.0/20
    12.6.208.0/20
    65.112.0.0/20
    67.134.204.0/22
    128.103.0.0/16
    134.174.0.0/16
    140.247.0.0/16
    192.5.66.0/24
    192.54.223.0/24
    192.131.102.0/24
    199.94.0.0/19
    199.94.32.0/20
    199.94.48.0/24
    199.94.60.0/22
    206.191.184.0/21
    206.253.200.0/21
""".split()

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'dist/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
    }
}

# used for encrypting redacted text -- this should usually not be set, but only entered on demand
REDACTION_KEY = None

# external service to notify on completion of a task
HEALTHCHECK_URL = {
    'capapi.tasks.daily_site_limit_reset_and_report': None,
}

ELASTICSEARCH_DSL={
    'default': {
        'hosts': 'localhost:9200'
    },
}
ELASTICSEARCH_DSL_AUTO_REFRESH = False  # don't force a reindex on every write to ES; let ES do it routinely instead
MAINTAIN_ELASTICSEARCH_INDEX = True  # whether to update index when changing cases

ELASTICSEARCH_INDEXES={
    'cases_endpoint': 'cases',
}
MAX_PAGE_SIZE = 10000

# for views decorated with @password_protected_page('some_key')
PASSWORD_PROTECTED_PAGES = {
    # 'some_key': ['some', 'accepted', 'passwords'],
    # 'some_key': [],  # no passwords will work
    # 'some_key': None,  # no password will be requested
}

SCREENSHOT_DEFAULT_TIMEOUT = 30  # seconds

# For the mailchimp signup form on the homepage.
MAILCHIMP = {
    'u': '',
    'id': '',
    'api_user': '',
    'api_key': ''
}

MAILGUN_API_KEY = ''
VALIDATE_EMAIL_SIGNUPS = False

MISSED_CITATIONS_DIR = "/tmp/missed_citations"

SITE_LIMIT_REPORT = False
