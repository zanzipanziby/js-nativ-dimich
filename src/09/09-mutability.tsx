export let q = 1;

export type UserType = {
    name: string
    age: number
}

const user = {name: "Dima", age : 32}

function changeAge(user: UserType) {
    user.age++
}