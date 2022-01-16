#! /bin/sh

# This is a post deployment hook

# All the cloned content will be placed under /home/jelastic/ROOT
cd /home/jelastic/ROOT
# Installing all the necessary packages
npm i
# Making sure the .env file exists
ENVFILE=src/config/env/.env
ENVSAMPLE=src/config/env/.envSAMPLE
if test -f "$ENVFILE"; then
    echo "🦄 $ENVFILE already exists, no fearthur steps needed"
else
    # .env doesn't exist, so check for .envSAMPLE instead
	if test -f "$ENVSAMPLE"; then
        echo "🦄 $ENVSAMPLE exists, it will be renamed to .env under src/config/env/.env."
        # Renaming .env so it does not break the build
        mv src/config/env/.envSAMPLE src/config/env/.env
        echo "🦄 $ENVSAMPLE file has been renamed in /src"
        sleep 2
    else
        # nor .env nor .envSAMPLE exist, so create a dummy .env
        echo "🦄 .env file not found"
        echo "🦄 $ENVSAMPLE not found, it will be created under src/config/env/.env"
        touch src/config/env/.env
	fi
fi
# making a fresh build
npm run build
# removing .env, prod env vars has already been setup
sleep 5
rm dis/config/env/.env
echo "🦄 .env has been removed from dist/"
# The server will be ran using PM2
npm run prod