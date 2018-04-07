import * as Hapi from 'hapi'
const app = new Hapi.Server();

app.connection({ port: 3000})

app.route({
    path: '/',
    method: 'GET',
    handler: (req: Hapi.Request, reply: Hapi.IReply) => {
        return reply('Deu certo!')
    } 
})

app.start(() => console.log('running!'))