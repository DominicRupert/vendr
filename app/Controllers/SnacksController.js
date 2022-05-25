import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";

function _drawSnacks() {
  let snacks = ProxyState.snacks;
  let template = "";
  snacks.forEach((s) => (template += s.Template));
  document.getElementById("snacks").innerHTML = template;
}

function _drawMoney() {
  document.getElementById("money").innerText = ProxyState.money.toString();
}
export class SnacksController {
  constructor() {
    console.log("snacks controller", ProxyState.snacks);
    ProxyState.on("snacks", _drawSnacks);
    ProxyState.on("money", _drawMoney);
    _drawSnacks();
    _drawMoney();
  }
  addMoney() {
    snacksService.addMoney();
  }
  buySnack() {
    snacksService.buySnack();
    let snack = ProxyState.snacks[0];
    _drawSnacks();
    _drawMoney();
    
    console.log("bought");
  }
}
