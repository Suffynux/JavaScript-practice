// Learning about prototypes
let computer = {cpu : 12, memory : "2GB"};
let secondComputer = {screen :"14 inch",
    __proto__ : computer,
};

console.log(secondComputer.__proto__);
