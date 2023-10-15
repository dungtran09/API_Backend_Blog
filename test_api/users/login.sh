curl \
-X POST \
-d @./data/login.json \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/authentication/log-in" \
-o ./data/log.json && cat ./data/log.json | jq
