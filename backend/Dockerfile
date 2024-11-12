FROM python:3.12-slim AS base

ENV POETRY_HOME=/opt/poetry
ENV PATH=${POETRY_HOME}/bin:${PATH}

RUN apt-get update \
    && apt-get install --no-install-recommends -y curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sSL https://install.python-poetry.org | python3 - && poetry --version

FROM base as builder

WORKDIR /app

COPY poetry.lock pyproject.toml ./

RUN poetry config virtualenvs.in-project true
RUN poetry install --only main --no-interaction

FROM base as runner

WORKDIR /app
COPY --from=builder /app/.venv/ /app/.venv/

COPY . /app

EXPOSE 8000

RUN chmod +x /app/src/entrypoint.sh

FROM runner AS development

WORKDIR /app/src

ENTRYPOINT ["/app/src/entrypoint.sh"]

FROM runner AS production

WORKDIR /app/src

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

ENTRYPOINT ENTRYPOINT ["/app/src/entrypoint.sh"]