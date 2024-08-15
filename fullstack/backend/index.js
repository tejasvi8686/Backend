import express from "express";

const app = express();

app.use(express.static('dist'))

// app.get("/", (req, res) => {
//   res.send("server is redy");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "The Great Gatsby",
      content:
        "A novel written by F. Scott Fitzgerald that explores themes of wealth, love, and the American Dream.",
    },
    {
      id: 2,
      title: "1984",
      content:
        "A dystopian novel by George Orwell that delves into themes of totalitarianism, surveillance, and individuality.",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      content:
        "A novel by Harper Lee that addresses racial injustice and moral growth in the American South.",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      content:
        "A classic novel by Jane Austen that explores the intricacies of social class, marriage, and morality in 19th-century England.",
    },
    {
      id: 5,
      title: "Moby-Dick",
      content:
        "A novel by Herman Melville that follows the voyage of the whaling ship Pequod, led by Captain Ahab in pursuit of the giant white whale Moby Dick.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

