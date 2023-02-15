#!/bin/bash

cd /var/www/html/botwReact/src/
pm2 start yarn --name "React" -- start
cd ../postgres-node/
nohup node index.js &
