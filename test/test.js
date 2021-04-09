const request = require('supertest');

const app = require("../index.js")

it("GET / should have response \"get\" ", function(done){
    request(app)
      .get("/")
      .expect({ response: "get" })
      .end(function(err, res){
        if (err) done(err);
        done();
      });
});


it("POST / should have response \"post\" ", function(done){
    request(app)
      .post("/")
      .expect({ response: "post" })
      .end(function(err, res){
        if (err) done(err);
        done();
      });
});

it("PUT / should have response \"put\" ", function(done){
    request(app)
      .put("/")
      .expect({ response: "put" })
      .end(function(err, res){
        if (err) done(err);
        done();
      });
});

it("DELETE / should have response \"delete\" ", function(done){
    request(app)
      .delete("/")
      .expect({ response: "delete" })
      .end(function(err, res){
        if (err) done(err);
        done();
      });
});