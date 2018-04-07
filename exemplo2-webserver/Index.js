"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var Hapi = __importStar(require("hapi"));
var app = new Hapi.Server();
app.connection({ port: 3000 });
app.route({
    path: '/',
    method: 'GET',
    handler: function (req, reply) {
        return reply('Deu certo!');
    }
});
app.start(function () { return console.log('running!'); });
