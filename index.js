// index.js Lab  locate file where server is and save there (index.js)

const express = require("express");
const cors = require("cors"); // Cors is a package that allows our client and server to communicate with each other without the need for advanced configuration.

const app = express();
app.use(cors()); 
app.use(express.json());


app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });


  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });

//   app.get("/weather/:temperature", (req, res) => {
//     const { temperature } = req.params;
//     const phrase = `<h3>It was ${temperature} today</h3>`;
//     res.status(200).send(phrase);
//   }



app.listen(4000, () => console.log("Server running on port 4000"));
// 