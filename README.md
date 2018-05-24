# Vineyard Backend API Template
---------

## Running the Template For the First Time ##
1. Run `$yarn initialStartUp`. This will..
    1. install all dependencies
    2. create your config.ts and config-test.ts configuration files.
    3. compile your json-schema to typescript
    4. compile your typescript
2. Modify config/config.ts `realConfig.database` to indicate a database of your choosing. `realConfig.database.devMode` should be `true`. Run `$tsc`
    1. Do the same to config/config-test.ts `testConfig.database` to run tests.
3. If the database name added above doesn't yet refer to an existing db, create it. In the command line enter the psql console (`$psql` ) and create the database (`CREATE DATABASE your_db_name;`) and quit (`\q`).
7. Run `$yarn resetDb`. This will add the vineyard tables (as well as the default user table included in this template) to your database.
    1. Run `$yarn resetDb -- test` to wipe the test db.
8. To start the server `$yarn dev`.
9. To run tests `$yarn test`.
10. **NOTE**: IF you are running the system locally or with http (not https) then in config.json and config-sample.json you need also to set `"api" -> "cookies" -> "cookie" -> "secure" = false`. 

## Root Directory Folders ##

 - **/config**: Contains configuration read by the webapp.
 - **/fixtures**: Contains functions for generating random and stock data for server initialization and tests.
 - **/scripts**: Files to be run from cli with node. Includes start-api.js (starts servers) and fixture.js (resets db, loads db with fixtures), and possibly daemon startup scripts.
 - **/src**: The app files.
 - **/test**: Tests for various app components.

##Request-Response Flow##

When the api is run, requests permeate through a number of layers in the app. Each layer has its own directory:

- **/src/endpoints** : Requests are initially fielded by EndpointInitializer. This class defines the endpoints: paths and verbs, the appropriate json-schema validator (found in request-validation.json), and directs the request to the next layer...

- **/src/endpoints/request-handlers**: Requests are delegated from the EndpointInitializer to an appropriate RequestHandler. These handlers do minimal logic, decomposing the request in request agnostic pieces of data. Handlers call logic files.

- **/src/logic**:  Logic files do the heavy lifting of the application. A logic class shouldn't know anything about request specific technology or client-side code, as this is normalized by the request handlers. Their main role is to orchestrate the database and various other backing services and synthesize their results into aggregated results. Logic files should _not_ know anything about what kind of thing calls them -- be it a request handler (and hence an http api call), a cron, or a script.

- **/src/model**: This directory contains the code for interacting with the vineyard-ground controlled core psql database. This includes schema.json (defines the database tables and relationships), model-types.ts (defines the types corresponding to database entries), and the daos.

- **/src/model/dao**: A dao (data access object) is a wrapper around lower level vineyard-ground database access methods, custom for the functionality of the given app. While creating a user will always at least require adding a record to the user table, it may also require a number of other database accesses for related tables. The userDao (e.g.) would handle this custom aggregation of database transactions for the given project.

- **/src/backing-services**: This is where code to interact with external resources (see https://12factor.net/backing-services) should live. These resources include custom wrappers around external apis, additional databases, and cryptocurrency nodes. Logic files will call these backing service objects and aggregate their results.

##App Startup Flow##

Unlike other node/express apps which rely heavily on importing objects directly to where they are needed (hence obscuring the notion of "how does the app get built?"), the vineyard template is designed instead with a heavy emphasis towards importing class definitions and creating instances of those classes and passing them in explicitly. The creation of instances (of e.g. request-handler or logic or backing-service or dao instances) is handled in three classes which together construct the entities of the entire application.

1. /src/village.ts :  Village extends from GenericVillage, a vineyard-village class which processes both /config/config.json (giving access to config specificied constants) and /src/model/schema.json (connecting the app to the database). In addition, village is used in the template to initialize all backing-services and daos. They should be stored on the class as private properties and referenceable with getters.

2. /src/web-service.ts : WebService extends from GenericWebService, a vineyard-village class which is used to start the application as well as setup various middleware around the application. In addition, WebService is used in the template to initialize all logic instances.  These will require backing-services and daos, which are accessible via the getters on the Village instance passed into WebService on construction. Logic instances should again be saved as private properties on the class and accessible via getters.

3.  /src/endpoints/endpoint-initializer.ts : EndpointInitializer is where all RequestHandler instances are created. These will require logic instances, and are accessible via the getters on the  WebService instance passed into EndpointInitializer on construction. RequestHandlers should be saved again as private properties with getters. This class also specifies all of the endpoints in the app and whether they should be publicly accessible or only by a logged in user.