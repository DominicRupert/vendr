import { ProxyState } from "../AppState.js";

class SnacksService {
  addMoney() {
    ProxyState.money += 0.25;
  }

  buySnack() {
    let money = ProxyState.money;

    let snack = ProxyState.snacks[0];
    if (snack.price <= money) {
        
        money -= snack.price;
      console.log("you bought the snack", money);
    }
  }
}

export const snacksService = new SnacksService();
