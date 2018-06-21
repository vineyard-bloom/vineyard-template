# Vineyard Backend API Template #

---------

### Setting Up Your Template ###

1. Run `yarn setup` to install dependencies and create config and gitignore files (or `npm setup`)
1. Make adjustments to the config/config.ts file to fit your project configuration
1. Run `yarn tsc` to compile TypeScript files to JavaScript (or `npm tsc`)

### Scripts in package.json ###

For npm, replace `yarn` with `npm`
<%- features.lawn ? '\n`yarn dev` starts the server\n' : '' %>
`yarn resetDb` resets the database

`yarn sampleData` seeds the database with sample data

`yarn tsc` compiles typescript using the version bundled in the project

`yarn setup` installs dependencies and creates config and gitignore files

### Root Directory Folders ###

 - **/config**: Contains configuration files for environment specific values.
 - **/fixtures**: Contains functions for generating random and stock data for server initialization and tests.
 - **/scripts**: Files to be run from cli with node. Includes start-api.js (starts servers), and possibly daemon startup scripts.
 - **/src**: The app files.
 - **/test**: Tests for various app components.

### Src Organization ###

When the api is run, requests permeate through a number of layers in the app. Each layer has its own directory:

- **/src/endpoints**: This directory contains json-schema defining the endpoints of the application and the code to 
embed those definitions into a working server. The interface `ApiContract` in generated/api-contract.ts indicates the methods
which the coder must provide. The methods will be triggered when a request hits an endpoint, and will typically defer
all heavy lifting to the next layer. See model.ts for three example methods implementing the `ApiContract`.

- **/src/logic**:  Logic files do the heavy lifting of the application. A logic class shouldn't know anything about request specific technology or client-side code, as this is normalized by the request handlers. Their main role is to orchestrate the database and various other backing services and synthesize their results into aggregated results. Logic files should _not_ know anything about what kind of thing calls them -- be it a request handler (and hence an http api call), a cron, or a script. The file logic.ts declares all app logics as well as their initialization, while pizza-logic.ts is one such logic.

- **/src/model**: This directory contains the code for interacting with the psql database. This includes schema.json (defines the database tables and relationships), and model-types.ts (defines the types corresponding to database entries), and model.ts which defines and creates the vineyard-ground collections for interacting with the db.

- **/src/backing-services**: This is where code to interact with external resources (see https://12factor.net/backing-services) should live. These resources include custom wrappers around external apis, additional databases, and cryptocurrency nodes. Logic files will call these backing service objects and aggregate their results. As with logic and model, the backing-services.ts file declares and creates all backing-services in the app.

All of these logics, backing-services, db table collections, and endpoints are created and integrated in village.ts. The `Village` interface... 
```
   export interface Village {
     config: FullConfig
     backingServices: BackingServices
     model: Model
     logic: Logic
     apiContract: ApiContract
   }
```

... contains every piece of the fully built application. Typically villages are constructed from config, to the backingServices and model, to logic, to apiContract.
