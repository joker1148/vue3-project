#!/bin/bash

echo 'build to the production environment'

rm -rf dist && npm run build

echo 'upload code to cloud main engine'

cd dist && scp -i ~/.ssh/vikingship.pem -r * root@121.199.70.72:/var/www

sh ./depoly.sh