#!/bin/bash
while [ "$input" != "exit" ]; do
    echo "Enter dir to make a directory , file to make a File or exit to quit the program"
    read input
     if [ "$input" = "dir" ]; then
        echo "Enter dir names"
        read dirName
        mkdir "$dirName"
    fi
    if [ "$input" = "file" ]; then
        echo "Enter file dir names"
        read fileName
        echo "$null" >> "$dirName/$fileName"
    fi
done