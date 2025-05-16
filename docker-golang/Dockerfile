FROM golang:1.24.3-alpine AS builder

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . .

RUN go build -ldflags="-s -w" -o app

RUN apk add --no-cache upx \
    && upx --best --lzma app

FROM scratch AS runner

COPY --from=builder /app/app .

ENTRYPOINT [ "./app" ]
