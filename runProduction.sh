#! /bin/sh

# This is a post deployment hook

# All the cloned content will be placed under /home/jelastic/ROOT
cd ROOT
# Installing all the necessary packages
npm i
# making a fresh build
npm run build
# The server will be ran using PM2
npm run prod