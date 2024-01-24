const fs = require("fs");

for (let i = 0; i < 1000000; ++i) {
  fs.writeFileSync("./content/big-file.txt", `hello world : ${i} `, {
    flag: "a",
  });
}
