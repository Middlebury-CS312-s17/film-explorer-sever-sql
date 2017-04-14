

const movieTable =function(table){
  table.integer('id').primary();
table.string('overview');
table.string('release_date');
table.string('poster_path');
table.string('title');
table.integer('vote_average');
}

const genreTable = function(table){
  table.integer('genre');
  table.integer('movie_id').references('movies.id');
}

exports.up = function(knex, Promise) {
  return Promise.all([knex.schema.createTable('movies', movieTable),
  knex.schema.createTable('genre', genreTable)])
  .then(()=>{
    console.log("Database created");
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('movies', movieTable),
  knex.schema.dropTable('genre', genreTable)])
  .then(()=>{
    console.log("Database destroyed");
  });
};
