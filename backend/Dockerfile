FROM python:3.13-slim AS base

RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    curl libpq-dev python3-dev gcc \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Configure Poetry
ENV POETRY_HOME=/opt/poetry
ENV PATH=${POETRY_HOME}/bin:${PATH}

RUN curl -sSL https://install.python-poetry.org | python3 -

FROM base AS builder

WORKDIR /app

COPY poetry.lock pyproject.toml ./

RUN poetry config virtualenvs.in-project true
RUN poetry install --only main --no-interaction

RUN poetry install

FROM base AS runner

WORKDIR /app

COPY --from=builder /app/.venv/ /app/.venv/

COPY . /app

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

ENV ENVIRONMENT=production

EXPOSE 8000

ENTRYPOINT ["poetry", "run", "gunicorn", "app.wsgi:application", "--bind=0.0.0.0:8000"]