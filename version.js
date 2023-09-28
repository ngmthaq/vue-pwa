/* eslint-disable */

try {
  const mode = process.argv[2];
  const fs = require("fs");

  let version = "";

  if (!mode) throw new Error("ERROR: Cannot find mode");

  if (mode === "dev") {
    version = Date.now() + "-dev";
  } else if (mode === "prod") {
    const pkg = require("./package.json");
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
