FROM oven/bun:1 as builder
WORKDIR /app
COPY package.json ./
RUN bun install
COPY . .

FROM oven/bun:1 as runner
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 4000
CMD ["bun", "run", "start"]
