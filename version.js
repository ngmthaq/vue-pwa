/* eslint-disable */

try {
  const mode = process.argv[2];
  const fs = require("fs");
  const pkg = require("./package.json");

  let version = "";

  if (!mode) throw new Error("ERROR: Cannot find mode");

  if (mode === "dev") {
    version = pkg.version + "." + Date.now() + "-dev";
  } else if (mode === "prod") {
    version = pkg.version;
  } else {
    throw new Error("ERROR: Cannot find mode");
  }

  fs.writeFile(".version.js", `export const version = "${version}";`, function (err) {
    if (err) throw err;
  });
} catch (error) {
  console.error(error);
}
