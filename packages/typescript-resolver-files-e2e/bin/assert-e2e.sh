#!/bin/bash

set -eu

output_pattern=packages/typescript-resolver-files-e2e/src/**/*.ts

# Assert committed files are the same
echo -e "\n=> Checking if actual output matches commited files..."
if [[ `git status --porcelain $output_pattern` ]]; then
  echo -e "\nx> Error!\n"
  echo "=> Following files do not have expected result:"
  git --no-pager diff HEAD --color -- $output_pattern
  git ls-files --others --exclude-standard
  echo -e "=> Run 'nx e2e typescript-resolver-files-e2e', commit the changes and try again.\n"
  exit 1
fi

echo -e "=> No errors.\n"
exit 0
