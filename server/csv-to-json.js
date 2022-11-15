const glob = require("glob");
const path = require("path");
const fs = require("fs");
const csv = require("csvtojson");

const csvPath = "assets/companies-data/csv/quarter-hour/";
const jpgPath = "assets/companies-data/jpg/quarter-hour/";

glob(csvPath + "*.csv", {}, async (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const allScvFiles = await Promise.all(
    files.map((file) => {
      const fileName = path.basename(file, '.csv')
      const jpgFileName = jpgPath + fileName + ".json";

      if (fs.existsSync(jpgFileName)) {
        return;
      }

      return csv()
        .fromFile(file)
        .then((file) => {
          return { jsonObj: JSON.stringify(file), jpgFileName };
        });
    })
  );

  allScvFiles.forEach((file) => file && fs.writeFileSync(file.jpgFileName, file.jsonObj));
});
