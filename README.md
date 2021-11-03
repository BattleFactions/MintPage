# Battle Factions Rarity Page

## Table of contents

- [Dependencies](#dependencies)
- [Install](#install)
- [Configure Env](#configure-env)
- [Running the Application](#running-the-application)
- [Build](#build)
- [Tests](#tests)
- [Deploy](#deploy)

#### Follow the next steps to Install, Run, Build, Test and Deploy the App.

## Dependencies

- Nvm - `brew install nvm` -> follow instructions in the console
- Node
- Serverless Framework

---

### Set Node Version

```
nvm use
```

### Install node modules
```
npm i
```

## Configure Env
The local env requires you to create a `.env` file in the root folder and add the following `key:values`:

```
AWS_ACCESS_KEY_ID=<Key on AWS>
AWS_SECRET_ACCESS_KEY=<Secret on AWS>
```

## Running the application
```
npm start
```
or
```
npm run start:clean
```

## Build

```
npm run build
```

## Tests

### Run tests

```
npm test
```

### Run coverage tests

```
npm run test:coverage
```

### Run Lint

```
npm run lint
```

## Deploy
Deploy the application on AWS through Serverless Framework to test in the sandbox:

## Application URLs

- [Local](http://localhost:1234)
- [Dev - Development](TBD)
- [Prod - Production](TBD)
