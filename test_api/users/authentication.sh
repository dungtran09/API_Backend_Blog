curl \
-X GET \
-d @./data/login.json \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/authentication" \
-o ./data/log.json && cat ./data/log.json | jq
