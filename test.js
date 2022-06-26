class cars{
    static company="Ford";

    static getPrice(tax=3000){
        console.log(`Price is : ${tax+20000}`);
    }
}
console.log(cars.company);
cars.getPrice();
