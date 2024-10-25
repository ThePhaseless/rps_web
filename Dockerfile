FROM node:lts AS builder

WORKDIR /app
RUN npm install -g bun
COPY ./package.json bun.lockb ./
RUN bun install
COPY ./ ./
RUN bun run build

FROM nginx:alpine-slim

COPY --from=builder /app/dist/browser /usr/share/nginx/html
