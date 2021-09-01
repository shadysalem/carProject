const homeHandler = require("./handlers/homepage");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const autoComp = require("./handlers/autoCompHandler");

function router(request, response) {
  if (request.url === "/") {
    homeHandler(request, response);
  } else if (request.url === "/autoComp") {
    autoComp(request, response);
  } else if (request.url.includes("public")) {
    publicHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}
module.exports = router;
