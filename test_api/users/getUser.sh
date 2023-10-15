curl \
-X GET \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/users/$(cat ../config/ID.txt)" \
-o ./data/log.json && cat ./data/log.json | jq
