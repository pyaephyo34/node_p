const name = "Pyae Phyo"
const userAge = 34

debugger
const user = {
    name,
    age: userAge,
    location: "Myanmar"
}

console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label:productLabel,price,rating = 5} = product

console.log(productLabel)
console.log(price)
console.log(rating)

const transaction = (type,{label,stock})=>{
    console.log(type,label,stock)
}

transaction('order',product)