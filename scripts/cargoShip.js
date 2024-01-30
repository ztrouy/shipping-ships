import { getCargoShips } from "./database.js";
import { getHaulerShips } from "./database.js";


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "cargo") {
            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.haulerid

            // Define a default object for the found hauler
            let haulingShip = { id: haulerId, name: "Error" }

            // Iterate the array of hauler objects
            const haulerShips = getHaulerShips()

            for (const hauler of haulerShips) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (hauler.id === parseInt(haulerId)) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip.name = hauler.name
                    break
                }
            }

            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant

            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
        }
    }
)

export const cargoShipsList = () => {
    const cargoShips = structuredClone(getCargoShips())

    // Alphabetizes the Cargo Ships
    cargoShips.sort((a, b) => {
        // Ensures that case does not effect sorting
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        
        // Informs Array Element which direction to move, if at all
        if (nameA < nameB) {
            return -1
        } else if (nameA > nameB) {
            return 1
        } else {
            return 0
        }
    })

    let cargoHTML = `<div class="header">Shipping Ships</div><ul>`

    for (const ship of cargoShips) {
        cargoHTML += `<li data-type="cargo"
                            data-id="${ship.id}"
                            data-haulerId="${ship.haulerShipId}"
                            data-name="${ship.name}"
                            >${ship.name}
                        </li>`
    }

    cargoHTML += "</ul>"

    return cargoHTML
}