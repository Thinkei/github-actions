#!/bin/bash
read -p 'Enter release name: ' release_name
read -p 'Enter release version: ' release_version
git tag -a -m "$release_name" $release_version
git push --follow-tags
