import {CityType, GovernmentBuildingType, HousesType} from "../02/02-02";

type LocalCityType = {
    title: string
    country: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechnologiesType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isStudent: boolean
    address: AddressType
    technologies: TechnologiesType[]

}

export const student: StudentType = {
    id: 1,
    name: "Dima",
    age: 32,
    isStudent: true,
    address: {
        streetTitle: "Chaykovskogo 22",
        city: {
            title: "Vileyka",
            country: "Belarus"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "CSS"},
        {id: 3, title: "JS/TS"},
        {id: 4, title: "React"},
        {id: 5, title: "Redux"},
    ],
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })

}
export const changeStatus = (student: StudentType) => {
    student.isStudent = !student.isStudent
}

export const doesStudentLiveIn = (student:StudentType, city: string)=> {
    return city === student.address.city.title
}


//------------------   Function for Object 'city'  ---------------
export const addMoneyToBudget = (building: GovernmentBuildingType , budget:number) => {
    building.budget += budget
}

export const repairHouse = (houses: HousesType) => {
    houses.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, number: number) => {
    building.staffCount -= number

}
export const toHireStaff = (building: GovernmentBuildingType, number: number) => {
    building.staffCount += number

}
export const createMessage = (city:CityType) => {
    return `Hello ${city.title} citizen.`
}























