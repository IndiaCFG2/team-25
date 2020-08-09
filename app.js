const links = require('./data/data1.js');

const express = require('express');

const app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('Welcome to Our 321 Org Cape mission API')
});

app.get('/api/links', function(req, res){
 
    var response = [];
    if( typeof req.query.board != 'undefined' && typeof req.query.grade != 'undefined'&& typeof req.query.sub != 'undefined'&& typeof req.query.week != 'undefined'&& typeof req.query.lesson != 'undefined'){
        response = links.filter(function(link){
          if((link.board.toLowerCase().includes(req.query.board.toLowerCase()))&&(link.grade.toLowerCase().includes(req.query.grade.toLowerCase()))
              &&(link.sub.toLowerCase().includes(req.query.sub.toLowerCase()))&&(link.week.toLowerCase().includes(req.query.week.toLowerCase()))
              &&(link.lesson.toLowerCase().includes(req.query.lesson.toLowerCase()))){
            return link;
          }
        });
      } else {
        response = links;
      }
    res.json(response);
  });

app.listen(port, function(){
  console.log('this app is listening on port 3000!')
});