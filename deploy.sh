#!/bin/bash

# Turn off command traces while dealing with
# the private key
set +x

echo -e $SSH_KEY > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa

set -x

npm run build
npm run deploy
