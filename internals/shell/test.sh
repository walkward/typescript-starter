#!/bin/sh

# Run tests...
set -x

mkdir -p ${PWD}/reports
ava-ts --tap | tap-xunit > ${PWD}/reports/junit.xml
