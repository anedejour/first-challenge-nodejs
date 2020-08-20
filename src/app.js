const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function logRequests(request, response, next){
  const { method, url} = request;
  const logLabel = `[${method.toUpperCase()}]`;

  console.log(logLabel);

  app.use(logRequests);

  return next
}

app.get('/repositories', (request, response) => {
    response.json(repositories);
});

app.post("/repositories", (request, response) => {
    const { title, url,techs } = request.body;

    const repository = { id: uuid(), title:title, url:url, techs:techs, likes:likes };

    repositories.push(repository);
    return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
    const { id } = request.params;

    const { title, url, techs } = request.body;

    });

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
    const { id } = request.params;

    const repository = repositories.find(repository => repository.id === id);

    repository.likes += 1;

    return response.json(repository);
});

module.exports = app;

const newLocal = 3333;
app.listen(newLocal, () => {
  console.log('🎈 Back-end started');
});
