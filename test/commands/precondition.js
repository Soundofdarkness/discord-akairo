const { Command } = require("../../src/index")

class PreconditionCommand extends Command {

    constructor(){
        super("precondition", {
            aliases: ["precondition"],
            preconditions: [preCondOne, preCondTwo]
        })
    }

    async exec(msg){
        await msg.reply("Precondition successful !");
    }
}

module.exports = PreconditionCommand;

function preCondOne(msg){
    console.log("precond1");
    return msg.author.id === "318645957094932480"
}

async function preCondTwo(msg){
    return msg.author.id !== "318645957094932480"
}