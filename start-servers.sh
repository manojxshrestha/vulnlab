#!/bin/bash
# Simple HTTP server for testing
# Run each subdomain on different ports

# Main site on port 8000
cd /home/pwn/vulnlab/www && python3 -m http.server 8000 &

# Subdomains on different ports
ports=(8001 8002 8003 8004 8005 8006 8007 8008 8009 8010 8011 8012 8013 8014 8015 8016)
subs=(api app admin dev staging cdn assets internal v1 v2 graphql ws auth cdn2 static internal-api)

for i in "${!subs[@]}"; do
    cd /home/pwn/vulnlab/${subs[i]} && python3 -m http.server ${ports[i]} &
done

echo "Servers started on ports 8000-8016"
echo "Add to /etc/hosts:"
echo "127.0.0.1 testcorp.local www.testcorp.local api.testcorp.local app.testcorp.local admin.testcorp.local dev.testcorp.local staging.testcorp.local cdn.testcorp.local assets.testcorp.local internal.testcorp.local v1.testcorp.local v2.testcorp.local graphql.testcorp.local ws.testcorp.local auth.testcorp.local cdn2.testcorp.local static.testcorp.local internal-api.testcorp.local"

wait
