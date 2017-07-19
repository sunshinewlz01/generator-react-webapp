node -v $i >/dev/null || { echo "$i node not found. please install node first"; exit 1; }


rm -rf node_modules
npm i

rm -rf build

npm run build
echo -e "build ok"