#!/bin/sh
# author: 	Aaron Tolmaci
# desc:		For now this script only starts elasticsearch, eventually it will run a daemon to watch for file changes and index them accordingly.

# Correct absolute path for safely running script anywhere.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"


# Nonblocking ES start, a shutdown script will be written in the future.
# For demonstrative purposes clean shutdown is uneccesary at this point.
$DIR/elasticSearch/bin/elasticsearch &

sleep 5

#TODO: while ES not ready sleep
#TODO: clear existing ES DB (for easier workflow testing

#TODO: index pdf file
#TODO: index multiple PDF files

#TODO: repeat last 2 steps for various file types

# Kibana for query testing.
$DIR/kibana/bin/kibana &
