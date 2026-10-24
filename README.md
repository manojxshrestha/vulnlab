# vulnlab

<p align="center">
  <img src="https://img.shields.io/badge/vulnlab-local%20test%20environment-brightgreen" alt="vulnlab">
  <img src="https://img.shields.io/badge/16-subdomains-blue" alt="16 subdomains">
  <img src="https://img.shields.io/badge/200%2B-high--value%20paths-orange" alt="200+ high-value paths">
  <img src="https://img.shields.io/badge/15-steps%20tested-success" alt="15 steps tested">
  <img src="https://img.shields.io/badge/language-agnostic-lightgrey" alt="Language agnostic">
</p>

<p align="center">
  <b>vulnlab</b> — A comprehensive local vulnerability testing environment with 16 subdomains, JavaScript endpoints, secrets, high-value paths, API documentation, and attack surfaces for testing recon and vulnerability scanning tools like <a href="https://github.com/yourusername/swarmrecon">swarmrecon</a>.
</p>

---

##  Purpose

vulnlab is a **local vulnerability testing laboratory** designed to test reconnaissance and vulnerability scanning tools (like [swarmrecon](https://github.com/yourusername/swarmrecon)) against a realistic, multi-subdomain web application with:

- **16 subdomains** across 17 ports
- **200+ high-value paths** (config files, secrets, git, CI/CD, docs)
- **JavaScript files** with 30+ API endpoints, GraphQL queries, WebSocket endpoints, and hardcoded secrets
- **API documentation** (OpenAPI/Swagger)
- **Hardcoded secrets** in JS, .env, and config files
- **Certificates, test files, API docs**
- **Multiple technology stacks** (PHP, ASP.NET, JSP, Python, Node.js, static)

---

##  Architecture

```
vulnlab/
├── www/                      # Main site (port 8000)
│   ├── index.html
│   ├── robots.txt, sitemap.xml
│   ├── .git/HEAD, .git/config
│   ├── backup.sql, config.php.bak, .env.bak
│   ├── .env (production secrets)
│   ├── swagger.json, openapi.json, docs/swagger.json
│   ├── server.key, certs/server.crt
│   ├── 200+ high-value paths (.env, .git/, docker-compose.yml, etc.)
│   ├── test files (PHP, ASPX, JSP, Python, shell.php, .htaccess)
│   └── secrets/ (.env with full prod credentials)
├── static/                    # JavaScript assets (served from www/static)
│   ├── main.js               # 30+ API endpoints, GraphQL, WS, secrets
│   ├── config.js             # API keys, internal endpoints, secrets
│   ├── vendor.js             # Axios API client, webhooks, secrets mgmt
│   ├── sw.js                 # Service worker
│   └── manifest.json
├── api/                       # Port 8001
│   ├── v1/health, users, auth, admin, debug
│   └── graphql
├── app/                       # Port 8002
├── admin/                     # Port 8003
├── dev/                       # Port 8004
├── staging/                   # Port 8005
├── cdn/                       # Port 8006
├── assets/                    # Port 8007
├── internal/                  # Port 8008
├── v1/                        # Port 8009
├── v2/                        # Port 8010
├── graphql/                   # Port 8010
├── ws/                        # Port 8011
├── auth/                      # Port 8012
├── cdn2/                      # Port 8013
├── static/                    # Port 8014
├── internal-api/              # Port 8015
├── secrets/                   # API keys, tokens
├── certs/                     # SSL certificates
├── secrets/api_keys.txt       # 15+ API keys, tokens, DB URLs
├── www/.env                   # Full production env
├── certs/server.crt, www/server.key
├── www/docs/swagger.json      # API docs
├── www/swagger.json, openapi.json
├── certs/server.crt, www/server.key
└── start-servers.sh           # Start all 17 servers
```

---

##  Quick Start

### 1. Start Servers
```bash
cd /home/pwn/vulnlab
./start-servers.sh
```
This starts 17 HTTP servers on ports 8000-8016.

### 2. Add Hosts Entries
```bash
echo "127.0.0.1 testcorp.local www.testcorp.local api.testcorp.local app.testcorp.local admin.testcorp.local dev.testcorp.local staging.testcorp.local cdn.testcorp.local assets.testcorp.local internal.testcorp.local v1.testcorp.local v2.testcorp.local graphql.testcorp.local ws.testcorp.local auth.testcorp.local cdn2.testcorp.local static.testcorp.local internal-api.testcorp.local" | sudo tee -a /etc/hosts
```

### 3. Verify
```bash
curl http://testcorp.local:8000  # Main site
curl http://api.testcorp.local:8001/v1/health  # API health
```

### 4. Run swarmrecon
```bash
cd /home/pwn/swarmrecon
./swarmrecon.sh -d testcorp.local
```

---

##  Endpoints & Ports

| Port | Subdomain | Description |
|------|-----------|-------------|
| 8000 | www.testcorp.local | Main site, high-value paths, secrets, docs |
| 8001 | api.testcorp.local | REST API v1, GraphQL |
| 8002 | app.testcorp.local | Frontend app |
| 8003 | admin.testcorp.local | Admin panel |
| 8004 | dev.testcorp.local | Dev environment |
| 8005 | staging.testcorp.local | Staging environment |
| 8006 | cdn.testcorp.local | CDN |
| 8007 | assets.testcorp.local | Static assets |
| 8008 | internal.testcorp.local | Internal services |
| 8009 | v1.testcorp.local | API v1 |
| 8010 | v2.testcorp.local / graphql | API v2 / GraphQL |
| 8011 | ws.testcorp.local | WebSocket |
| 8012 | auth.testcorp.local | Auth service |
| 8013 | cdn2.testcorp.local | CDN 2 |
| 8014 | static.testcorp.local | Static files |
| 8015 | internal-api.testcorp.local | Internal API |

---

##  Attack Surface

### JavaScript Endpoints (static/main.js)
30+ API endpoints including:
- `/api/v1/users`, `/api/v1/auth/login`, `/api/v1/admin/users`
- `/api/v1/internal/debug`, `/api/v1/secrets`, `/api/v1/config`
- GraphQL queries (`GET_USER`, `GET_ALL_USERS`, `ADMIN_STATS`)
- WebSocket endpoints (`wss://ws.testcorp.local/ws`)

### Hardcoded Secrets (static/main.js, config.js, .env)
- `API_KEY=sk_live_FAKE_TEST_KEY_123`
- `JWT_SECRET=super-secret-jwt-key-change-in-production`
- `AWS_ACCESS_KEY=AKIA_FAKE_TEST_KEY`
- `AWS_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
- `DATABASE_URL=postgresql://admin:supersecret@localhost:5432/prod`
- `STRIPE_SECRET=sk_live_FAKE_STRIPE_KEY`
- `GITHUB_TOKEN=ghp_abcdefghijklmnopqrstuvwxyz123456`
- `SENTRY_DSN=https://abcdefghijklmnopqrstuvwxyz@sentry.io/123456`

### High-Value Paths (200+)
```
.env, .env.local, .env.production, .git/config, .git/HEAD
docker-compose.yml, Dockerfile, .dockerignore
package.json, package-lock.json, yarn.lock
composer.json, composer.lock, Gemfile, Gemfile.lock
requirements.txt, Pipfile, Pipfile.lock, pyproject.toml
.github/workflows/ci.yml, .github/workflows/cd.yml
.gitlab-ci.yml, .circleci/config.yml, Jenkinsfile
CODEOWNERS, SECURITY.md, CONTRIBUTING.md
.editorconfig, .eslintrc.js, .prettierrc, tsconfig.json
webpack.config.js, vite.config.js, rollup.config.js
next.config.js, nuxt.config.js, gatsby-config.js
.env, .env.local, .env.production, .env.development
.git/config, .git/HEAD, .gitignore
docker-compose.yml, Dockerfile, .dockerignore
package.json, package-lock.json, yarn.lock
...
```

### API Documentation
- `www/swagger.json` - OpenAPI 3.0 spec
- `www/openapi.json` - OpenAPI 3.0 spec
- `www/docs/swagger.json` - Detailed API docs with auth

### Certificates & Keys
- `certs/server.crt` - X.509 certificate
- `www/server.key` - Private key

### Test Files (Vulnerability Types)
| File | Vulnerability Type |
|------|-------------------|
| `shell.php` | RCE via `system($_GET['cmd'])` |
| `shell.php` | Command injection |
| `web.config` | ASP.NET customErrors=Off (info disclosure) |
| `.htaccess` | Rewrite rules |
| `shell.php` | PHP RCE |
| `default.aspx`, `admin.aspx` | ASP.NET info disclosure |
| `test.jsp` | JSP info disclosure |
| `app.py` | Flask app |
| `web.config` | ASP.NET debug mode |
| `.htaccess` | Apache rewrite rules |

---

##  Port Mapping

| Port | Subdomain | Path |
|------|-----------|------|
| 8000 | www.testcorp.local | www/ |
| 8001 | api.testcorp.local | api/ |
| 8002 | app.testcorp.local | app/ |
| 8003 | admin.testcorp.local | admin/ |
| 8004 | dev.testcorp.local | dev/ |
| 8005 | staging.testcorp.local | staging/ |
| 8006 | cdn.testcorp.local | cdn/ |
| 8007 | assets.testcorp.local | assets/ |
| 8008 | internal.testcorp.local | internal/ |
| 8009 | v1.testcorp.local | v1/ |
| 8010 | v2.testcorp.local / graphql.testcorp.local | v2/ / graphql/ |
| 8011 | ws.testcorp.local | ws/ |
| 8012 | auth.testcorp.local | auth/ |
| 8013 | cdn2.testcorp.local | cdn2/ |
| 8014 | static.testcorp.local | static/ |
| 8015 | internal-api.testcorp.local | internal-api/ |

---

##  Testing with swarmrecon

```bash
# Full scan (all 15 steps)
cd /home/pwn/swarmrecon
./swarmrecon.sh -d testcorp.local

# Resume interrupted scan
./swarmrecon.sh -d testcorp.local --resume

# Start from specific step
./swarmrecon.sh -d testcorp.local --from 14

# Expected outputs in recon/testcorp.local/
# - 14-high-value/high-value-results.json
# - check/livejslinks.txt, js-endpoints.txt
# - js_files/ (downloaded JS, manifest, analysis, LinkFinder)
# - 14-high-value/high-value-results.json
```

---

## 📁 Expected Results

After full scan, `recon/testcorp.local/` contains:

```
recon/testcorp.com/
├── 01-wappalyzer/technologies.json
├── 02-dns-whois/ (13 files)
├── 03-intel/ (5 files)
├── 04-osint/ (4 files)
├── 05-nmap/nmap-full.txt
├── 06-ctfr/ (2 files)
├── 07-subenum/ (https-subs.txt, alive-domains.txt)
├── 08-puredns/puredns-subdomains.txt
├── 09-vhost/ (3 files)
├── 10-zone-transfer/ (NS + AXFR)
├── 12-robots-sitemap/ (robots.txt, sitemaps)
├── 13-crawl/ (merged-crawl.txt, check/, gooutput/)
├── 14-high-value/
│   ├── high-value-results.json
│   ├── high-value-results.txt
│   └── high-value-<host>.json (per host)
├── 15-js/
│   ├── check/livejslinks.txt
│   ├── check/js-endpoints.txt
│   ├── check/js-endpoints-absolute.txt
│   ├── js_files/ (files/, manifest.tsv, analysis.md, linkfinder.txt)
│   └── urls/js-files.txt, js-files-local.txt
├── check/ (crawledurls.txt, param-urls.txt, gf/)
├── merged-crawl.txt
├── https-subs.txt
├── alive-domains.txt
└── recon.log
```

---

##  Stopping Servers

```bash
pkill -f "http.server"
```

Or find specific PIDs:
```bash
ss -tlnp | grep -E '800[0-9]|801[0-6]' | awk '{print $NF}' | cut -d= -f2 | cut -d, -f1 | xargs kill
```

---

##  Security Notes

- **All secrets are fake** - generated for testing only
- **No real credentials** - all keys/tokens are fake examples
- **Local only** - binds to 0.0.0.0 but intended for localhost only
- **No authentication** - intentionally open for testing
- **Ephemeral** - servers die on Ctrl+C or `pkill -f "http.server"`

---

##  Customization

### Add New Subdomain
1. Create directory: `mkdir /home/pwn/vulnlab/newsub`
2. Add files: `echo '{"service":"new"}' > /home/pwn/vulnlab/newsub/index.html`
3. Add to `start-servers.sh` arrays:
   ```bash
   subs=(... "newsub")
   ports=(... 8017)
   ```
4. Add to `/etc/hosts`: `127.0.0.1 newsub.testcorp.local`

### Add High-Value Paths
```bash
echo "# newpath" > /home/pwn/vulnlab/www/newpath
```

### Add Secrets
```bash
echo "NEW_SECRET=newvalue" >> /home/pwn/vulnlab/www/.env
```

---

##  License

MIT License - Feel free to use, modify, and distribute for authorized testing only.

---

##  Disclaimer

**For authorized testing only.** This environment contains intentionally vulnerable patterns, fake secrets, and exposed attack surfaces. Do not deploy to production or public networks. Use only in isolated, authorized testing environments.

---

##  Related

- [swarmrecon](https://github.com/yourusername/swarmrecon) - The recon scanner this lab was built to test
- [OWASP Testing Guide](https://owasp.org/www-project-testing-guide/) - Reference for test cases
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) - Payload reference

---

<p align="center">
  Made for testing • <a href="https://github.com/yourusername/swarmrecon">swarmrecon</a> companion
</p>
