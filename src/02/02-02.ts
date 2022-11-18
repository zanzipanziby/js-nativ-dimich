
//----------------   HOUSES TYPE    -------------------
export type StreetType = {
    title: string
}
export type AddressType = {
    number?: number
    street:StreetType
}
export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

//----------------   GOVERMENTBUILDING TYPE    -------------------

export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

//------------------------
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}