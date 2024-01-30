import { getHaulerShips } from "./database.js";
import { getCargoShips } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.id
            
            // Start a counter variable at 0
            let counter = 0
            
            // Iterate all of the shipping ships
            const cargoShips = getCargoShips()
            for (const ship of cargoShips) {
                // Does the haulerId foreign key match the id?
                if (parseInt(haulerId) === ship.haulerShipId)
                    // Increase the counter by 1
                    counter++
            }

            window.alert(`This hauler is carrying ${counter} shipping ships`)
        }
    }
)

export const haulerShipsList = () => {
    const haulers = structuredClone(getHaulerShips())

    // Alphabetizes the Hauler Ships
    haulers.sort((a, b) => {
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

    let haulersHTML = `<div class="header">Hauling Ships</div>\n<ul>`

    for (const hauler of haulers) {
        haulersHTML += `<li data-type="hauler"
                            data-id="${hauler.id}"
                            data-dockId="${hauler.dockId}">
                            ${hauler.name}
                        </li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}