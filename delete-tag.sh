#!/bin/bash
read -p 'Enter tag to delete: ' tag_name
git tag -d $tag_name
git push origin :refs/tags/$tag_name
