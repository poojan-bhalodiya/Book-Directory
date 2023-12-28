const Directory = require("../modal/bookdirectory-modal");

//get
const getDirectory = (req, res) => {
  if (req.params.ID) {
    // If ID is provided, fetch a specific directory
    const directoryId = req.params.ID;

    Directory.findById(directoryId)
      .then((directory) => {
        if (!directory) {
          return res.status(404).json({ error: "Directory not found." });
        }

        res.json(directory);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    // If no ID is provided, fetch all directories
    Directory.find()
      .then((directories) => {
        res.json(directories);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};
//create directory
const createDirectory = (req, res) => {
  // Check if title and author are missing
  if (!req.body.title || !req.body.author) {
    return res.status(400).json({ error: "Title and author are required." });
  }

  // Check if the book already exists
  Directory.findOne({ title: req.body.title, author: req.body.author })
    .then((existingBook) => {
      if (existingBook) {
        return res.status(400).json({ error: "Book already exists." });
      }

      // Create new directory entry
      const directory = new Directory({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        price: req.body.price,
      });

      // Save the directory entry
      directory
        .save()
        .then((savedDirectory) => {
          res.json(savedDirectory);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//update directory
const updateDirectory = (req, res) => {
  const directoryID = req.params.ID;

  Directory.findByIdAndUpdate(
    directoryID,
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        price: req.body.price,
      },
    },
    { new: true } // This option returns the updated document
  )
    .then((updatedDirectory) => {
      if (!updatedDirectory) {
        return res.status(404).json({ error: "Directory not found." });
      }
      res.json(updatedDirectory);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Delete directory
const deleteDirectory = (req, res) => {
  Directory.findByIdAndDelete(req.params.ID)
    .then((deletedDirectory) => {
      if (!deletedDirectory) {
        return res.status(404).json({ error: "Directory not found." });
      }

      res.json({ message: "Directory deleted successfully." });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getDirectory,
  createDirectory,
  updateDirectory,
  deleteDirectory
};
