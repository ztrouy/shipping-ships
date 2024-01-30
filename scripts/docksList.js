import { getDocks } from "./database.js";
import { getHaulerShips } from "./database.js";


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a dock list item clicked?
        if (itemClicked.dataset.type === "dock") {
            // Get the id of the dock clicked
            const dockId = itemClicked.dataset.id
            
            // Initialize empty Array of hauler ships
            const dockedHaulers = []

            // Iterate all of the hauler ships
            const haulers = getHaulerShips()

            for (const hauler of haulers) {
                // Does the dockId foreign key match the dock id?
                if (parseInt(dockId) === hauler.dockId) {
                    // Push name to hauler ships Array
                    dockedHaulers.push(hauler.name)
                }
            }

            // Generate variable portion of the message String
            let message = ""

            // No ships?
            if (dockedHaulers.length === 0) {
                // Set String to "nothing"
                message = "nothing"

            // Some ships?
            } else {
                // Join ship names together, with ", " separator
                message = dockedHaulers.join(", ")
            }

            // Display alert message, interpolating in the generated variable portion
            window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${message}`)



        }
    }
)

export const dockList = () => {
    const docks = structuredClone(getDocks())

    let docksHTML = `<div class="header">Docks</div><ul>`

    for (const dock of docks) {
        docksHTML += `<li data-type="dock"
                            data-id="${dock.id}"
                            data-location="${dock.location}">
                            ${dock.location} can hold ${dock.volume} million tons of cargo
                        </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}