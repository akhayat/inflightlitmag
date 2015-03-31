#!/bin/bash

if [ "$1" = '' ]; then
  echo 'Usage: htmlcleanup <html file>'
fi

for arg in "$@"
do
  sed -i 's/<p /<div /g' "$arg"
  sed -i 's/<\/p>/<\/div>/g' "$arg"
done