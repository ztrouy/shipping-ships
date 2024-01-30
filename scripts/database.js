const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, dockId: 1, name: "Yoruhime"},
        { id: 2, dockId: 2, name: "Ichigohime"},
        { id: 3, dockId: 3, name: "Emilyhime"},
        { id: 4, dockId: 4, name: "Mikkihime"},
    ],
    cargos: [
        {id: 1, haulerShipId: 1, name: "Esso Atlantic"},
        {id: 2, haulerShipId: 2, name: "Prairial"},
        {id: 3, haulerShipId: 3, name: "Palais Royal"},
        {id: 4, haulerShipId: 4, name: "Rivoli"},
        {id: 5, haulerShipId: 4, name: "Champs Elysee"},
        {id: 6, haulerShipId: 3, name: "Ever Ace"},
        {id: 7, haulerShipId: 2, name: "Nissei Maru"},
        {id: 8, haulerShipId: 1, name: "MSC Gulsun"},
        {id: 9, haulerShipId: 1, name: "HMM Rotterdam"},
        {id: 10, haulerShipId: 2, name: "CMA CGM Trocadero"}
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulerShips = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getCargoShips = () => {
    return database.cargos.map(cargo => ({...cargo}))
}