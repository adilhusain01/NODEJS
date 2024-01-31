//The benefit is that it doesnt wait for the resources to get triggered when theyre available instead of waiting and
//further proceeds with other requests already
const { readFile, writeFile, read } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;
    writeFile(
      "./content/third.txt",
      `This is supposed to be in a third file -> ${first}, ${second}`,

      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        readFile("./content/third.txt", "utf-8", (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(result);
        });

        console.log("end with the task");
      }
    );
  });
});

console.log("starting with the new task");
