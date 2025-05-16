FROM golang:1.24.3-alpine AS builder

WORKDIR /app

COPY . .
RUN go mod download

RUN CGO_ENABLED=1 go build \
    -ldflags="-s -w -extldflags '-static'" \
    -o binariy

RUN apk add --no-cache upx \
    && upx --best --lzma binariy

FROM scratch AS runner

COPY --from=builder  /app/binariy .

ENTRYPOINT [ "./binariy" ]