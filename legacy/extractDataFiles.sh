#!/bin/bash
declare -a arr=("pdf" "doc" "docx" "txt")
## now loop through the above array
for i in "${arr[@]}"
do
   echo "done with $i"
   find -iname "*.$i" -exec mv {} ~/Capstone/sortedData/$i \;
done
