'use strict';

const DEFAULT_COMMAND = `--help`;
const USER_ARGV_INDEX = 2;
const ExitCode = {
  SUCCESS: 0,
  ERROR: 1,
};
const HttpResponseCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};
const MAX_ID_LENGTH = 6;
const KeysForValidation = {
  offerKeys: [`category`, `description`, `picture`, `title`, `type`, `sum`],
  commentKeys: [`text`],
};

module.exports = {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode,
  HttpResponseCode,
  MAX_ID_LENGTH,
  KeysForValidation,
};
