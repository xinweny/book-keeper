FROM python:3.13-slim AS base

RUN apt-get update \
    && apt-get install --no-install-recommends -y curl libpq-dev python3-dev gcc \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN pip install poetry

ENV POETRY_NO_INTERACTION 1
ENV POETRY_VIRTUALENVS_IN_PROJECT 1
ENV POETRY_VIRTUALENVS_CREATE 1
ENV POETRY_CACHE_DIR /tmp/poetry_cache

FROM base AS builder

WORKDIR /app

COPY poetry.lock pyproject.toml ./

RUN poetry install --no-root && rm -rf $POETRY_CACHE_DIR

FROM base AS runner

WORKDIR /app
COPY --from=builder /app/.venv/ /app/.venv/

COPY . /app

FROM runner AS development

WORKDIR /app

EXPOSE 8000

ENTRYPOINT ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]

FROM runner AS production

WORKDIR /app

# Set user and group
ARG user=django
ARG group=django
ARG uid=1000
ARG gid=1000

RUN groupadd -g ${gid} ${group}
RUN useradd -u ${uid} -g ${group} -s /bin/sh -m ${user}

# Switch to user
RUN chown -R ${uid}:${gid} /app

USER ${uid}:${gid}

EXPOSE 8000

ENTRYPOINT ["poetry", "run", "gunicorn", "-c",  "gunicorn.conf.py"]