#!/bin/bash
while [ "$input" != "exit" ]; do
    echo "Enter dir to make a directory , file to make a File , fdir to make a file in a file in a existing dir or exit to quit the program"
    read input
     if [ "$input" = "dir" ]; then
        echo "Enter dir names"
        read dirName
        mkdir "$dirName"
    fi
    if [ "$input" = "file" ]; then
        echo "Enter file names"
        read fileName
        echo "$null" >> "$dirName/$fileName"
    fi
    
    if [ "$input" = "fdir" ]; then
        echo "Enter dir > file names"
        read fileName
        echo "$null" >> "$fileName"
    fi
done