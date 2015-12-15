var express = require('express');
var app = express();
var mongojs = require('mongojs');

var mongolab_username = 'adrian_hsu';
var mongolab_password = 'YOUR_PASSWORD_HERE';
var db_host = '31561';
var db_name = 'adrian_demo';


var db = mongojs('contactlist', ['contactlist']);
// var db = mongojs('mongodb://' + mongolab_username + ':' + mongolab_password + '@ds0' + db_host + '.mongolab.com:' + db_host + '/' + db_name, ['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res) {

    db.contactlist.find(function(err, docs) {

        console.log("[SERVER] GET(): RECEIVED A GET REQUEST");
        console.log(docs);
        res.json(docs);
    });
});

// STEP1: ADD CONTACT
// app.post('/contactlist', function(req, res) {
    
//     console.log("[SERVER] POST(): ADD CONTACT IN DATABASE SUCCESSFULLY")
//     console.log(req.body);

//     db.contactlist.insert(req.body, function(err, doc) {

//         res.json(doc);
//     })
// });

// STEP2: DELETE CONTACT
// app.delete('/contactlist/:id', function(req, res) {
    
//     var id = req.params.id;
//     console.log("[SERVER] DELETE(): DELECT SELECTED CONTACT IN DATABASE SUCCESSFULLY")
//     console.log(req.body);

//     db.contactlist.remove({
//         _id: mongojs.ObjectId(id)
//     }, function(err, doc) {
//         res.json(doc);
//     })
// });


// app.get('/contactlist/:id', function(req, res) {
//     var id = req.params.id;
//     console.log(id);
//     db.contactlist.findOne({
//         _id: mongojs.ObjectId(id)
//     }, function(err, doc) {
//         res.json(doc);
//     });
// });


// app.put('/contactlist/:id', function(req, res) {
//     var id = req.params.id;
//     console.log(req.body.name);
//     db.contactlist.findAndModify({
//         query: {
//             _id: mongojs.ObjectId(id)
//         },
//         update: {
//             $set: {
//                 name: req.body.name,
//                 email: req.body.email,
//                 number: req.body.number
//             }
//         },
//         new: true
//     }, function(err, doc) {
//         res.json(doc);
//     });
// });

app.listen(3000);
console.log("server running on port 3000");
