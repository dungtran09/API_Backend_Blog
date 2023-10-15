curl \
-X GET \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/users" \
-o ./data/log.json && cat ./data/log.json | jq
