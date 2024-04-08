#!/bin/bash

set -eo pipefail

projectType=$1
project=$2
baseBranch=$3

if [ "$projectType" != "lib" ] && [ "$projectType" != "app" ]; then
  echo "Project type must be 'lib' or 'app'"
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

affected=$(yarn --silent nx show projects --affected --type=$projectType --base=$baseBranch --select=projects)

if [ -z "$affected" ]; then
  echo "false"
  exit 0
fi

for i in $affected
do
  if [[ "$i" == "$project" ]]; then
      echo "true"
      exit 0
  fi
done

echo "false"
exit 0
