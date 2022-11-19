const glob = require("glob");
const path = require("path");
const fs = require("fs");
const csv = require("csvtojson");

const csvPath = "assets/companies-data/csv/quarter-hour/";
const jsonPath = "assets/companies-data/json/quarter-hour/";

glob(csvPath + "*.csv", {}, async (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const allScvFiles = await Promise.all(
    files.map((file) => {
      const fileName = path.basename(file, '.csv')
      const jsonFileName = jsonPath + fileName + ".json";

      if (fs.existsSync(jsonFileName)) {
        return;
      }

      return csv()
        .fromFile(file)
        .then((file) => {
          return { jsonObj: JSON.stringify(file), jsonFileName };
        });
    })
  );

  allScvFiles.forEach((file) => file && fs.writeFileSync(file.jsonFileName, file.jsonObj));
});
