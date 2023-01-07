

import express from "express";
import http from "http";
import cors from "cors";
import jwt from 'jwt-simple';


import config from "./config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors())


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

    console.log(req.body);

    let data = {
        appkey: config.appkey,
        userid: userid,
        role: role,
        expire: expire 
    };

    console.log(data);

    let token: string = jwt.encode(data, config.secret);

    res.json({
        code: 0,
        data: { token: token },
        message: 'ok',
    });
});


if (!config.appkey || !config.secret ) {
    throw "appkey and secret can not be empty";
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})