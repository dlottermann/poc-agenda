import { Agenda } from "@hokify/agenda";

const mongoConnectionString =
  "mongodb://root:pass123456@localhost:27017/jobs?directConnection=true&authSource=admin";

const agenda = new Agenda({ db: { address: mongoConnectionString } });

agenda.define("delete old users", async (job) => {
  await setTimeout(() => console.log(`Passando ${Date()}`), 50000);
});

export { agenda };
