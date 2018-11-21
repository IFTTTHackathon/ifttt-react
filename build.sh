#!/usr/bin/env bash

npm run build
docker build -t ifttt-react .
docker run -p 8200:80 ifttt-react