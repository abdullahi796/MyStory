#!/bin/bash
echo "Adding to stage"
git add .

echo "Enter Message"
read NAME
git commit -m name
echo "Commiting"

git push -u origin master

echo "Success update repo"