console.log("task-2");
console.log("");


class Storage {
    #items = [];

    constructor(items){
        this.#items = items;
    }

    getItems(){
        return this.#items
    }

    addItem(newItem){
        this.#items.push(newItem)
    }

    removeItem(itemToRemove){
        this.#items = this.#items.filter((name) => name !== itemToRemove)
    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Nanitoids");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


console.log("");
console.log("");