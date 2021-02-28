import express from 'express';
const app = express();
import { log, env, prisma } from './util'

app.get('/heros', async (req, res) => {
    res.send(await prisma.hero.findMany());
})

app.get('/heros/:id', async (req, res) => {
    const heroId:number = parseInt(req.params.id);
    if(isNaN(heroId)) {
        console.warn(`Given hero id '${req.params.id}' is not a number`)
        res.sendStatus(400);
        return;
    }

    log.debug(`Querying hero with id '${heroId}'`);
    const hero = await prisma.hero.findUnique({ where: { id: heroId }, include: { starships: true } });
    if(!hero) {
        res.sendStatus(404);
        return;
    }

    res.send(hero);
})

app.listen(env.API_PORT, () => {
    log.info(`API started on port ${env.API_PORT}`);
});
