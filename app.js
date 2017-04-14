
const http = require('http'),
    express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    server = http.createServer(app),
    mongoClient = require('mongodb').MongoClient,
    mongoURL = 'mongodb://localhost:5000/film-explorer',
    ObjectID = require('mongodb').ObjectID;
 let db;
  //  movies = require('./lib/movies')('movies.json');

  const corsOptions = {
    methods: ['GET', 'PUT', 'POST'],
    origin: '*',
    allowedHeaders: ['Content-Type']
  };

  app.use(cors(corsOptions));
  app.use(express.static(__dirname +'/site'));
  app.use(bodyParser.json());

  app.get('/api/movies', (request, response) =>{
    db.collection('movies').find().toArray((err, documents)=>{
      if (err){
        console.error(err);
        response.sendStatus(500);
      }else{
        response.send(documents);
      }
    });
  });

  app.get('/api/movies/:id', (request, response) =>{
    const movieId = parseInt(request.params.id);

    db.collection('movies').find({id:movieId}).next((err, document)=>{
      if (err){
        console.error(err);
        response.sendStatus(500);
      }else{
        response.send(document);}
    });
  });

  app.put('/api/movies/:id', (request, response) =>{

    let movie = request.body;
    movie._id = ObjectID.createFromHexString(movies._id);

    db.collection('movies').update({id:movieId}, {$set:movie},(err, result)=>{
      if (err){
        console.error(err);
        response.sendStatus(500);
      }else{
        response.sendStatus(200);
      }

    });


  });

mongoClient.connect(mongoURL, (err, database)=>{
  if (err){
    console.error(err);
  }else{
    db = database;
    server.listen(5042);
    console.log('Listening on port %d', server.address().port);
  }
});
