console.log("task-3");
console.log("");


class StringBuilder {
    initialValue;
    #value = this.initialValue;

    constructor(value){
                this.#value = value;
            }

    getValue(){
        return this.#value
    }

    padEnd(str){
        this.#value += str
    }

    padStart(str){
        this.#value = str + this.#value

    }

    padBoth(str){
        this.#value += str;
        this.#value = str + this.#value
    }

}



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


console.log("");