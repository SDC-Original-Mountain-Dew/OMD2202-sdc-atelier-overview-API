# OMD2202-sdc-atelier-overview-API
This is an API that returns a list of products and a list about a product's information. Consists of NodeJS, Postgres SQL for database and Express for server communications

## Installation (Homebrew, Git, Node/NPM, PostgreSQL)
Download and install these in the terminal:
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
Create a .env by running `touch .env` then edit the file with `vim .env` in the terminal. Inside copy and paste this:
```
PORT1=3004
PORT2=3005

DB_URL = localhost
DB_USER = postgres
DB_PORT = 5432
DB_PASS = ''
```
Create a .gitignore by running `touch .gitignore` then edit the file with `vim .gitignore` inside the terminal. Inside copy and paste this:
```
.env
*.DS_Store
*.csv
package-lock.json
node_modules/
*.pem
*.json
```
Download these .csv files from: https://drive.google.com/drive/folders/1Gqxt7Tw0I50OG2dn4LncHAJ_x_BnWuRX
```
features.csv
photos.csv
product.csv
skus.csv
styles.csv
related.csv
```
Create and seed the database by running these in the terminal and psql command line:
```
psql postgres
\i server1/db/schema.sql
\i server1/db/seeder2.sql
```
Than lastly start the express server by running `npm run start` back in the terminal
