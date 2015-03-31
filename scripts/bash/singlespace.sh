#!/bin/bash

if [ "$1" = '' ]; then
  echo 'Usage: singlespace.sh <html file>'
fi

for arg in "$@"
do
  sed -i 's/<p /<div /g' "$arg"
  sed -i 's/<\/p>/<\/div>/g' "$arg"
  sed -i 's/line-height: 200%//g' "$arg"
  sed -i 's/margin-top: [0-9]*\.[0-9]*in;//g' "$arg"
  sed -i 's/margin-bottom: [0-9]*\.[0-9]*in;//g' "$arg"
done