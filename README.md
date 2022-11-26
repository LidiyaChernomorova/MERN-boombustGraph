## Run app using docker

Run `make build` from root to build containers
Run `make run` from root to run containers with docker-compose


## In 'server' folder

`yarn install`
`nodemon server.js`

## In 'client' folder

`yarn install`
`yarn start`

## Installing MongoDB
`cd`

if (you have a previous version of mongodb) {
    `brew services stop mongodb`
    `brew uninstall mongodb`
    `brew tap mongodb/brew`
    `brew install mongodb-community`
    `brew services start mongodb-community`
} else {
    `brew tap mongodb/brew`
    `brew install mongodb-community`
    `brew services start mongodb-community`
}

## Run MongoDB services
`brew services start mongodb-community@6.0`

## link to tutorial
`https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66`# MERN-boombustGraph
