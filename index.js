const server = require("./api/server.js");

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Server is listening now on port ${port}`);
});

/*
  This is a test branch
*/
