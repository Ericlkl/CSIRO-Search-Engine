#!/bin/sh
# author: 	Aaron Tolmaci
# desc:		For now this script only starts elasticsearch, eventually it will run a daemon to watch for file changes and index them accordingly.

# Correct absolute path for safely running script anywhere.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"


# Nonblocking ES start, a shutdown script will be written in the future.
# For demonstrative purposes clean shutdown is uneccesary at this point.
$DIR/elasticSearch/bin/elasticsearch -d

until $(curl --output /dev/null --silent --head --fail http://localhost:9200); do
    printf '.'
    sleep 5
done

#get pid of elasticsearch
pid=$(pgrep -f elasticsearch)
echo "elasticsearch ready! - PID is $pid"

#TODO: clear existing ES DB (for easier workflow testing

# cleanup function
function finish() {
	pkill -f elasticsearch
	while kill -0 $pid 2> /dev/null; do sleep 1; done;
  	echo "elasticsearch exited cleanly"
}


# Kibana for query testing.
#$DIR/kibana/bin/kibana &

#wait for user to press enter
read -p "press enter to shutdown elasticsearch"

# catch exit
trap finish EXIT
