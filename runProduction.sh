#! /bin/sh

# This is a post deployment hook

# All the cloned content will be placed under /home/jelastic/ROOT
cd /home/jelastic/ROOT
# Installing all the necessary packages
npm i
# Renaming .env so it does not break the build
mv src/config/env/.env\ _SAMPLE src/config/env/.env
# making a fresh build
npm run build
# removing .env, prod env vars has already been setup
rm src/config/env/.env
# The server will be ran using PM2
npm run prod