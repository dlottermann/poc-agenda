import express from "express";
import { agenda } from "./queue";

const port = process.env.PORT; // "3000"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/job", async (req, res) => {
  // IIFE to give access to async/await
  await agenda.start();

  await agenda.every("1 minutes", "delete old users");

  // Alternatively, you could also do:
  //await agenda.every("*/1 * * * *", "delete old users");
  res.send("Cron agendada");
});

app.listen(port, () => {
  console.info("Server running on port 3000");
});

//https://roluquec.medium.com/job-queuing-101-start-using-bull-in-your-node-js-project-part-i-2be3ef36a42d
