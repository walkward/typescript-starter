#!/bin/sh

# Run tests...
set -x

rm -rf ${DIR}/reports
mkdir -p ${DIR}/reports
ava-ts --tap | tap-xunit > ${DIR}/reports/junit.xml
