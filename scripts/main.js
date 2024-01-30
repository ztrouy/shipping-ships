import { dockList } from "./docksList.js";
import { haulerShipsList } from "./haulerShip.js";
import { cargoShipsList } from "./cargoShip.js";


const haulerHTML = document.querySelector(".hauler__list")
haulerHTML.innerHTML += haulerShipsList()

const cargoHTML = document.querySelector(".cargo__list")
cargoHTML.innerHTML += cargoShipsList()

const dockHTML = document.querySelector(".dock__list")
dockHTML.innerHTML += dockList()