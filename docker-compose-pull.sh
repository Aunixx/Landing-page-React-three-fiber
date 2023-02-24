#!/bin/bash
git pull
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 168237867270.dkr.ecr.us-east-1.amazonaws.com
/usr/local/bin/docker-compose -f /home/ubuntu/nitroleague-website/docker-compose.yml pull
/usr/local/bin/docker-compose -f /home/ubuntu/nitroleague-website/docker-compose.yml up -d
aws cloudfront create-invalidation --distribution-id E3W38XDGWS7B9I --paths "/*"