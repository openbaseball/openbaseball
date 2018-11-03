GOPATH=$(shell pwd)
GOPACKAGES?=$(shell find . -name '*.go' -not -path "./src/server/vendor/*" -exec dirname {} \;| sort | uniq)
GOFILES?=$(shell find . -type f -name '*.go' -not -path "./src/server/vendor/*")
CONFIG_PATH?=$(shell pwd)/etc/config-test.json

all: help

.PHONY: start-client build-client test-client help build run fmt vendor clean test coverage check vet lint

help:
	@echo "start-client   - start CRA dev server"
	@echo "build-client   - client production build"
	@echo "test-client    - run client tests"
	@echo "list-client    - lint client"
	@echo "fmt            - format application sources"
	@echo "clean          - remove artifacts"
	@echo "test           - run tests"
	@echo "coverage       - run tests with coverage"
	@echo "check          - check code style"
	@echo "vet            - run go vet"
	@echo "lint           - run golint"
	@echo "vendor         - install the project's dependencies"

start-client:
	cd ./src/client && npm run start

build-client:
	cd ./src/client && npm run build

test-client:
	cd ./src/client && npm run test

lint-client:
	cd ./src/client && npm run lint

vendor:
	cd ./src/server && dep ensure

clean:
	go clean

build: clean
	go build -o bin/service-entrypoint ./src/server/cmd/main.go

fmt:
	go fmt $(GOPACKAGES)

run: build
	CONFIG_PATH=$(CONFIG_PATH) ./bin/service-entrypoint

test: clean
	CONFIG_PATH=$(CONFIG_PATH) go test -v ./...

coverage: clean
	CONFIG_PATH=$(CONFIG_PATH) go test -v -cover $(GOPACKAGES)

check: vet lint

vet:
	go vet $(GOPACKAGES)

lint:
	ls $(GOFILES) | xargs -L1 golint
