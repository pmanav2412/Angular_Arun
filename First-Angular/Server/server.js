const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dbConn = "mongodb://localhost:27017/marlabs";
const jwt = require("jsonwebtoken");

mongoose.connect(dbConn, { useNewUrlParser: true }).then(() => {
  console.log("DataBase Connected!");
}).catch(() => {
  console.log("Error connecting Database!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: "http://localhost:4200"
}));

app.post("/authenticate", (req, res) => {

  if (req.body.password == "admin" && req.body.username == "admin") {
    let token = jwt.sign({
      "username": req.body.username,
      "org": "marlabs"
    }, "marlabs-secret-key", {
        expiresIn: '1h'
      });
    res.send({
      
      isLogedsin: true,
      msg: "loged in Successful",
      token: token
    });
  } else {
    res.send({
      isLogedsin: false,
      msg: "invalid username and password",
      token: null
    })
  }
});


app.use((req, res, next) => {
  
  const token = req.body.token || req.header.token || req.query.token;
  
  if (!token) {
    
    res.send({
      isLogedsin: false,
      msg: "Token not available!"
    })
  } else {
 
    jwt.verify(token, 'marlabs-secret-key', (err, decoded) => {
      if (err) {
        res.send({
          isLogedsin: false,
          msg: "invalid Token"
        })

      }
      else {
        next();
      }
    })
    // next();
  }
})



const productSchema = mongoose.Schema({
  "productId": Number,
  "productName": String,
  "productCode": String,
  "releaseDate": String,
  "description": String,
  "price": Number,
  "starRating": Number,
  "imageUrl": String,
});

const productsModel = mongoose.model("products", productSchema);


app.post("/saveProduct", (req, res) => {

  const productDocument = productsModel(req.body)
  productDocument.save(function (err) {
    if (!err) {
      res.send({
        status: 1,
        msg: "Product Saved!"
      });
    }
    else {
      res.status(403).send(err);
    }
  });
});




app.get("/products", async (req, res) => {
  // const result = productsModel.find({},(err,doc)=>{
  //     if(!err){
  //       res.send(doc);
  //     }else{
  //       res.status(403).send(err);
  //     }
  // });
  try {
    const result = await productsModel.find();
    res.send(result);
  } catch (ex) {
    res.status(403).send(ex.message);
  }


});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("Server started on " + port + " port number!");
})