#!/bin/bash

# Turn off command traces while dealing with
# the private key
set +x
echo -e $SSH_KEY | base64 --decode > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
ssh-keyscan buttercup.pw >> ~/.ssh/known_hosts
set -x

npm run build
npm run deploy

set +x
rm ~/.ssh/id_rsa
set -x
