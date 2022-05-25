// import { ValuesController } from "./Controllers/ValuesController.js";
import {SnacksController} from "./Controllers/SnacksController.js"

class App {
  // valuesController = new ValuesController();
  snacksController = new SnacksController()
}

window["app"] = new App();
