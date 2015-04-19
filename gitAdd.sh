#!/bin/bash
echo "Adding to stage"
git add .

echo "Enter Message"
read NAME
git commit -m "$NAME"
echo "Commiting"

git push -u origin master

echo "Success update repo"