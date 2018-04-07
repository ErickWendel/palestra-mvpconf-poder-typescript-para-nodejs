"use strict";
class Base {
    constructor(database) {
        this.database = database;
    }
    list() {
        return Promise.resolve(this.database);
    }
    create(item) {
        this.database.push(item);
        return Promise.resolve(true);
    }
}
class HeroiEntidade {
    constructor() {
        this.nome = '';
    }
}
class WarriorEntidade {
    constructor() {
        this.poder = '';
    }
}
class Heroi extends Base {
    constructor() {
        super([]);
    }
}
class Warrior extends Base {
    constructor() {
        super([]);
    }
}
(async () => {
    const heroi = new Heroi();
    await heroi.create({ nome: "MEU HEROI" });
    console.log('herois', await heroi.list());
    const warrior = new Warrior();
    await warrior.create({ poder: "MEU WARRIOR" });
    console.log('warriors', await warrior.list());
})();
//# sourceMappingURL=Index.js.map