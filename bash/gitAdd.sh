#!/bin/bash
echo "Adding to stage"
echo "  "
echo "  "
git add .

echo "Enter Message"
read NAME
echo "  "
echo "  "
echo "Doing stuff"
echo "  "
echo "  "
git commit -m "$NAME"
echo "  "
echo "  "

echo "Commiting"
echo "  "
echo "  "

git push -u origin master
echo "  "
echo "  "

echo "Success update repo"
echo "  "
echo "  "