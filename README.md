<div id="top"></div>

<br />
<div align="center">
  <h3 align="center">Shield API</h3>


</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#built-with">Built With</a>
      </li>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->


### Built With

This project structure is built using

-   [Express.js](https://expressjs.com/)
-   [Sequelize](https://sequelize.org/)
-   [Swagger](https://swagger.io/)
-   [Typescript](https://www.typescriptlang.org/)
-   [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
-   [Jest](https://jestjs.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Features

-   Everything is modular and unit testable
-   Typescript everything
-   Project API structures with routes, controllers, models, repositories, middlewares, and services
-   Centralized configuration input validator

### Folder Structure

```
├── .husky/                     # Pre-commit config for lint staged
├── docs/                       # Swagger API docs
├── src/                        # All application source
├──── @types/                   # Type definition for modules
|
├──── api/
├────── controllers/            # Define all controllers
├────── middlewares/            # Define all middlewares
├────── models/                 # Define all sequelize models
├────── repositories/           # Define all repositories
├────── routes/
├──────── v1/                   # Define all v1 routes
├────── services/               # Define all services
├────── types/                  # Define all input types
|
├──── config/
├────── appConfig.ts            # Define app configuration
|
├──── constants/                # Define all constants
├──── database/                 # Define database connection and sync tables
├──── utils/                    # Define reusable libs
├──── server.ts                 # Create express config
├──── index.ts                  # ENTRYPOINT - Start server
|
└── ...
```

<!-- GETTING STARTED -->

## Getting Started

To start project, just clone this repo 
### Prerequisites

Before installation, make sure you have the following prerequisites

-   NPM
    ```sh
    npm install npm@latest -g
    ```
-   MSSQL server

### Installation

1. Clone the repo
    ```sh
    git clone git@github.com:CENTERS-FOR-INTERNATIONAL-PROGRAMS/dmi-shield-integrated-api.git
    ```
2. Install yarn packages
    ```sh
    yarn install
    ```
3. Create `.env` file in main directory
4. Copy and customize envs from `.env.copy`
5. Test and build the project
    ```sh
    yarn run build
    ```
6. Sync database tables
    ```sh
    yarn run sync-db
    ```
7. Run the server
    ```sh
    yarn run start
    ```
8. Access swagger docs from `localhost:3001/docs/v1`

<p align="right">(<a href="#top">back to top</a>)</p>


### OpenHim Configuration


1. Follow the instructions on how to setup OpenHim here [https://github.com/jembi/openhim-mediator-tutorial](https://github.com/jembi/openhim-mediator-tutorial)
