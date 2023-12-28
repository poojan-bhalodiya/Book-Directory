const directoryrouter = require("express").Router();
const { getDirectory, createDirectory,updateDirectory,deleteDirectory } = require("../controller/directory");

directoryrouter.get("/", (req, res) => {
  res.send("Create a Book - Directory");
});
//getallDirectory
directoryrouter.get("/directory", getDirectory);
//getDirectory
directoryrouter.get("/directory/:ID", getDirectory);
//create Directory
directoryrouter.post("/directory", createDirectory);
//update Directory
directoryrouter.put("/directory/:ID", updateDirectory);
// Delete a directory
directoryrouter.delete("/directory/:ID", deleteDirectory); 


module.exports = directoryrouter;
