

# Initial Setup

## Create docker container
* Pull the docker image
* * `docker pull mongodb/mongodb-community-server:latest`
* Create and run the docker container
* * `docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest`

## Setup Bakcend
* Add variables to .env file
* * Create a .env file in the /backend folder if not existing
* * Set Value
* * * DATABASE_URL="mongodb://localhost:27017"

## Setup Client
* Add variables to .env file
* * Create a .env file in the /client folder if not existing
* * Set Value
* * * VITE_BACKEND_URL="http://localhost:3000"

## Setup Initial Data

