#!/bin/bash

set -eo pipefail

projectType=$1
project=$2
baseBranch=$3

if [ "$projectType" != "libs" ] && [ "$projectType" != "apps" ]; then
  echo "Project type must be 'libs' or 'apps'"
  exit 1
fi

if [ -z "$project" ]; then
  echo "Project name is required"
  exit 1
fi

if [ -z "$baseBranch" ]; then
  echo "Base branch is required"
  exit 1
fi

affected=$(yarn nx affected:$projectType --plain --base=$baseBranch)
affectedFinal=${affected:=""}

# If no affected found
if [ -z "$affectedFinal" ]; then
  echo "false"
  exit 0
fi

# If at least one affected found
# Split string into array
affectedArr=(${affected// / })
for i in "${affectedArr[@]}"
do
  if [[ "$i" == "$project" ]]; then
      echo "true"
      exit 0
  fi
done

echo "false"
exit 0
