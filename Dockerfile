FROM node AS builder

WORKDIR /app
RUN npm install -g bun
COPY ./package.json bun.lockb ./
RUN bun install
COPY ./ ./
RUN bun run build

FROM nginx

COPY --from=builder /app/dist /usr/share/nginx/html
