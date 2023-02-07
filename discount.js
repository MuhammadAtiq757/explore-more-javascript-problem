function ticketPrice(ticketQuantity){
const frist100Rate = 100;
const second100Rate = 90;
const restTicketRate = 70;
if(ticketQuantity <=100){
const price = ticketQuantity * frist100Rate;
return price;

}

else if (ticketQuantity <=200){
    const frist100PRice = 100 * frist100Rate;
    console.log(frist100PRice);
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    console.log(frist100PRice ,restTicketPrice)
    const totalPrice = frist100PRice + restTicketPrice;
    return totalPrice;
}




}

const price = ticketPrice(120);
console.log('price: ', price);