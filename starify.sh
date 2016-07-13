#!/bin/sh
# gem install jill
jill -s --star-in README.md --star-out README_STARRED.md
mv README_STARRED.md README.md
