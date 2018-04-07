import { unlinkSync, writeFileSync} from 'fs'

unlinkSync('MeusDados.json')
writeFileSync('MeusDados.json', JSON.stringify([{nome: `Erick-${Date.now()}`}]))
console.log('finalizou')

