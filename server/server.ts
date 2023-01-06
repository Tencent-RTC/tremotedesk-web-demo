

import express from "express";
import http from "http";
import cors from "cors";
import jwt from 'jwt-simple';


import config from "./config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/peer", async (req, res) => {
    res.sendFile(__dirname + "/public/peer.html");
});

app.get('/', async (req, res) => {
    res.redirect('/peer');
});


app.post("/token", async (req, res) => {

    let roomid = req.body.roomid;
    let userid = req.body.userid;
    let role = req.body.role;
    let expire = req.body.expire || 3600 * 24;
    expire = Math.floor(Date.now() / 1000) + expire;

    let data = {
        appkey: config.appkey,
        userid: userid,
        role: role,
        expire: expire 
    };

    let token: string = jwt.encode(data, config.secret);

    res.json({
        code: 0,
        data: { token: token },
        message: 'ok',
    });
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
})