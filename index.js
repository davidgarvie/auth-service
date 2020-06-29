const app = require("./src/server");
const logger = require("./src/logger");
const { version } = require("./package.json");

const PORT = 8080;

app.listen(PORT, () => {
  logger.info(`version ${version} running on port ${PORT}`);
});
