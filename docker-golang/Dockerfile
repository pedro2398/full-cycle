FROM golang:1.24-alpine AS builder

WORKDIR /app

COPY . .

FROM scratch AS runner

COPY --from=builder /app .

ENTRYPOINT [ "go run ." ]
