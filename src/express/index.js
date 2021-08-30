'use strict';

const chalk = require(`chalk`);
const express = require(`express`);
const path = require(`path`);
const router = require(`./routes`);
const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;
const TEMPLATES_DIR = `templates`;

const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.use(router);

app.set(`views`, path.resolve(__dirname, TEMPLATES_DIR));
app.set(`view engine`, `pug`);

app.listen(DEFAULT_PORT, () => console.log(chalk.blue(`Сервер запущен на порту ${DEFAULT_PORT}`)));
