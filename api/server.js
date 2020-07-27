const express = require("express");
const AccountsRouter = require("../accounts/accounts-router.js")
const cors = require('cors')


const db = require("../data/dbConfig.js");

const server = express();
server.use(cors());


server.use(express.json());
server.use("/api/accounts", AccountsRouter);


module.exports = server;
