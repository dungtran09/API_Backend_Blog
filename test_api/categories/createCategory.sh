curl \
-X POST \
-b "$(cat ../config/COOKIE.txt)" \
-d @./data/create.json \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/categories" \
-o ./data/log.json && cat ./data/log.json | jq 
