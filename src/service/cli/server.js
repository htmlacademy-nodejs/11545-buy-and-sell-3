'use strict';

const express = require(`express`);
const chalk = require(`chalk`);
const {HttpResponseCode} = require(`../../constants.js`);
const createRouter = require(`../api`);

const API_PREFIX = `/api`;
const DEFAULT_PORT = 3000;

const createServer = async (port) => {
  const server = express();
  server.use(express.json());

  const apiRouter = await createRouter();

  server.use(API_PREFIX, apiRouter);

  server.use((req, res) => {
    res.status(HttpResponseCode.NOT_FOUND).send(`Not found`);
  });

  server.listen(port, () => console.info(chalk.blue(`Принимаю подключения на порт ${port}`)));
};

module.exports = {
  name: `--server`,
  run(args) {
    const [port] = args;
    createServer(Number.parseInt(port, 10) || DEFAULT_PORT);
  },
};
