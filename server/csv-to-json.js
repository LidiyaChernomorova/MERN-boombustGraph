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
    files.map((file, index) => {
      const fileName = path.basename(file, ".csv");
      const jsonFileName = jsonPath + fileName + ".json";

      if (fs.existsSync(jsonFileName)) {
        return;
      }

      return csv({ output: "csv", noheader: true })
        .fromFile(file)
        .then((file) => {
          const copy = [...file[0]].reduce((acc, header, headerIndex) => {
            if (header === "HiGH") {
              header = "HIGH";
            }

            
            return {
              ...acc,
              [header]: file.reduce((acc, arr, index) => {
                if (index === 0) return acc;
                return [...acc, file[index][headerIndex]];
              }, []),
            };
          }, {});

          return { jsonObj: JSON.stringify(copy), jsonFileName };
        });
    })
  );

  allScvFiles.forEach(
    (file) => file && fs.writeFileSync(file.jsonFileName, file.jsonObj)
  );
});
