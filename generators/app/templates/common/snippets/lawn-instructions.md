
#### Server Health Checks ####

"Shallow" health check, to make sure the server works:

1. Run `yarn dev` to start the server
1. Visit the server at path `/status/shallow`
1. Response should be 200/ok. The server is working!

"Deep" health check, to make sure the server and database are connected:

1. Run `yarn resetDb` to reset your database (note that the database value in your config file must match an existing local database)
1. Run `yarn dev` to start the server
1. Visit the server at path `/status/deep`
1. Response should be 200/ok. The server is working and is connected to the database!
