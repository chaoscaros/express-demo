const express = require("express");
const app = express();

app.get("/",(res,rep,next)=>{
    res.name = "自己佬";
    next();
})
app.get("/",(res,rep)=>{
    rep.send(`${res.name}超级牛逼!`);
})


app.listen(3000);