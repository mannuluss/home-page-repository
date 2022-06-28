#!/bin/bash
if [[ $1 = "front" || $1 = "all"]]
then
    cd ./frontend
    npm install
    echo "Compilando FRONTEND"
    npm run build
    echo "copiando los archivos del front"
    sudo cp -r ./frontend/dist/* /var/www/html/HomePage
fi
if [[ &1 = "back" || $1 = "all"]]
then
    cd ../backend
    npm install
    echo "Compilando BACKEND"
    npm run build
    npm run start
fi