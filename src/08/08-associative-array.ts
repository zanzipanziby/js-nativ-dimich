export const user = {
    name: "Dima",
    age: 12,
    address: {
        city: {
            title: "Vileyka"
        }
    }
}
const cityTitle = user.address.city.title
const cityTitle2 = user["address"]["city"]["title"]



console.log(cityTitle===cityTitle2) //true

const usersObj = {
    "0":"Dima",
    "1":"Misha",
    "2":"Veronika",
    "3":"Svetlana",
    "4":"Jura"
}

console.log(usersObj["2"]) // "Veronika"

type SuperUserType = {
    [key: string]: {id: number, name: string}
}

// associative-array
export const superUsers: SuperUserType = {
    "101": {id: 101, name: "Dima"},
    "102": {id: 102, name: "Misha"},
    "103": {id: 103, name: "Veronika"},
    "104": {id: 104, name: "Svetlana"},
    "105": {id: 105, name: "Jura"},
}
//add user
let newUser = {id: 12321, name: "Valia"}
superUsers[newUser.id] = newUser
// find user
let dima = superUsers[101]
 // delete user
delete superUsers[101]

//update user

superUsers[102].name = "Michail"









