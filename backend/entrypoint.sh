#!/bin/sh

if [ "$ENVIRONMENT" = "production" ]; then
    exec poetry run gunicorn -c gunicorn.conf.py
elif [ "$ENVIRONMENT" = "development" ]; then
    exec poetry run python manage.py runserver 0.0.0.0:8000
else
    echo "ENVIRONMENT variable is not set"
fi