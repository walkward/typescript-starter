#!/bin/sh

npm run cleanup:reports

# Run tests...
set -x
mkdir -p ${DIR}/reports
ava-ts --tap | tap-xunit > ${DIR}/reports/ava-junit.xml
