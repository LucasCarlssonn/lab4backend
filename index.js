const express = require("express");
const app = express();
const PORT = process.env.PORT || 2626;

app.use(express.static("public"));

app.listen(PORT, () =>{
    console.log("Listening on port " + PORT);
});