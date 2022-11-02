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
type StudentType = {
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
console.log(student.age)
console.log(student.address.city.country)
console.log(student.technologies[3].title)