#!/bin/bash
make docker
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push openbaseball/openbaseball
