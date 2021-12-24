const app = require("./server/server");

app.listen(4000, () => {
  console.log(
    "Listening \nhttp://localhost:4000/graphql \nhttp://localhost:4000"
  );
});
