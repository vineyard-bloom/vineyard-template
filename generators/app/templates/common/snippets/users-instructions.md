
#### Testing Users Fixtures ####

Included are several scripts for testing user database fixtures.

`node scripts/fixture.js clean` deletes all data in the DB

`node scripts/fixture.js user` creates one test user in the DB

`node scripts/fixture.js users 10` creates 10 randoms users (change to any number)

`node scripts/fixture.js init` creates 20 random users

#### Accessing User Endpoints ####

1. Make sure there is an existing database in the `database` field of the config/config.ts file
1. Start the server with `yarn dev`
1. Access the following user-related endpoints:
    * `/user` post to create a new user
    * `/user/login` post to log a user in
    * `/user/logout` post to log a user out
