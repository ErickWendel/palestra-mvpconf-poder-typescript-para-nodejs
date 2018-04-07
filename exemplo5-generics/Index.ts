interface IRead<T> {
    list(): Promise<T[]>
}
interface IWrite<T> {
    create( item: T): Promise<boolean>;
}

abstract class Base<T> implements IRead<T>, IWrite<T> {
    constructor(private database: T[]) {
    
    }
    list(): Promise<T[]> {
        return Promise.resolve(this.database)
    }
    create(item: T): Promise<boolean> {
        this.database.push(item);
        return Promise.resolve(true)
    }
}

class HeroiEntidade { 
   public nome: string = '';
}

class WarriorEntidade {
    public   poder: string = '';
}

class Heroi extends Base<HeroiEntidade> {
    constructor() {
        super([]);
    }
}
class Warrior extends   Base<WarriorEntidade> {
    constructor() {
        super([]);
    }
}

(async() => {
    const heroi = new Heroi();
    await heroi.create(<HeroiEntidade> { nome: "MEU HEROI"})
    console.log('herois', await heroi.list())

    const warrior = new Warrior();
    await warrior.create(<WarriorEntidade> { poder: "MEU WARRIOR"})
    console.log('warriors', await warrior.list())

})()
 
