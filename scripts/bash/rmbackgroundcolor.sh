#!/bin/bash

if [ "$1" = '' ]; then
  echo 'Usage: rmbackgroundcolor.sh <html file>'
fi

for arg in "$@"
do
  sed -i 's/background: #[A-Za-z0-9]*//g' "$arg"
done