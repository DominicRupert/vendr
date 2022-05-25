export class Snack{
    constructor(name, price,){
        this.name = name
        this.price = price
    
        

    }
    get Template(){
        return`
        <div class="col-6">
        <h1>${this.name} </h1>
        <h1>${this.price}</h1>
        <button onclick="app.snacksController.buySnack(${this.price})"><h1>BUY</h1></button>
      </div>
        `
    }
}