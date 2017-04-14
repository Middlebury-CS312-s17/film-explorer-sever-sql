# film-explorer-server-sql
This is the server for our film explorer.

## Setup

When you download this, make sure to call `npm install`.

To setup the database, you need to run the migrations using knex 

`knex migrate:latest`

This will only work if you have installed `knex` globally using `npm install -g knex`. Otherwise you can run

`node_modules/.bin/knex migrate:latest`

If you are making your own migrations, you can do so with `knex migrate:make new-migration-name`.

