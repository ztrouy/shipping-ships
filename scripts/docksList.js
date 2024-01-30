import { getDocks } from "./database.js";

export const dockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-type="dock"
                            data-id="${dock.id}"
                            data-volume="${dock.volume}">
                            ${dock.location}
                        </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}