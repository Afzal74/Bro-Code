// Class = {ES6 features } provides structured and more cleaneer way to 
//         work with objects compared to traditional constructor function
//         ex: static keyword, encapsulation, inheritance

class Products {
    Products(name,price){
        this.name =name;
        this.price = price;

    }
    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Products("cookies",100);
const product2 = new Products("shirt",200);

product1.displayProduct();
product2.displayProduct();

const salesTax = 0.05;

const total = product1.calculateTotal(salesTax);
console.log(total);