const multer = require("multer");
var MulterAzureStorage = require("multer-azure-storage");

const upload = multer({
  storage: new MulterAzureStorage({
    azureStorageConnectionString: process.env.AZURE_CONNECTION_STRING,
    containerName: process.env.AZURE_CONTAINER,
    containerSecurity: "blob",
  }),
});

module.exports = upload;
