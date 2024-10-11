FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm
USER node

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH=/home/node/.bun/bin:$PATH
RUN bun install -g @angular/cli
RUN echo "source <(ng completion script)" >> ~/.bashrc