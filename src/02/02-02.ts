
//----------------   HOUSES TYPE    -------------------
type StreetType = {
    title: string
}
type AddressType = {
    number?: number
    street:StreetType
}
type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

//----------------   GOVERMENTBUILDING TYPE    -------------------

type GovernmentBuildingType = {
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