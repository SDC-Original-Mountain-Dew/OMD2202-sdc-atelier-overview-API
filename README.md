# OMD2202-sdc-atelier-overview-API
This is an API that returns a list of products and a list about a product's information. Consists of NodeJS, Postgres SQL for database and Express for server communications

## Installation (Homebrew, Git, Node/NPM, PostgreSQL)
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git
brew install node
brew install postgresql
export PATH=/Library/PostgreSQL/14/bin:$PATH
git clone https://github.com/SDC-Original-Mountain-Dew/OMD2202-sdc-atelier-overview-API.git
cd OMD2202-sdc-atelier-overview-API
npm install
```
## Setup
created a .env by running `touch .env` then edit the file with `vim .env`. Inside copy and paste this:
```
PORT1=3004
PORT2=3005

DB_URL = localhost
DB_USER = postgres
DB_PORT = 5432
DB_PASS = ''
```
created a .gitignore by running `touch .gitignore` then edit the file with `vim .gitignore`. Inside copy and paste this:
```
.env
*.DS_Store
*.csv
package-lock.json
node_modules/
*.pem
*.json
```
Download there .csv files from: https://drive.google.com/drive/folders/1Gqxt7Tw0I50OG2dn4LncHAJ_x_BnWuRX
```
features.csv
photos.csv
product.csv
skus.csv
styles.csv
related.csv
```
