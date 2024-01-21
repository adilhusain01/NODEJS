//The benefit is that it doesnt wait for the resources to get triggered when theyre available instead of waiting and
//further proceeds with other requests already

const { readFile, writeFile, read } = require("fs");

const first = readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(result);
  }
});

writeFile(
  "./content/third.txt",
  "This is async",
  { flag: "a" },
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(result);
    }
  }
);

const second = readFile("./content/third.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(result);
  }
});
