#!/bin/sh

# Run tests...
set -x

mkdir -p ${DIR}/reports
ava-ts --tap | tap-xunit > ${DIR}/reports/junit.xml
