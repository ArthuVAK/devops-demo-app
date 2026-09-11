const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("DevOps Demo Application is running! CI/CD Test!");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Application running on http://localhost:${PORT}`);
  });
}

module.exports = app;