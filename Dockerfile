FROM node:20-alpine as builder

RUN npm --silent install --global --depth 0 pnpm

WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
COPY . .
RUN pnpm run build

FROM node:20-alpine as runner

WORKDIR /app
COPY --from=builder /app/build/ ./build/
COPY --from=builder /app/package.json .

CMD [ "node", "build" ]