import {UserType} from "./09-mutability";

export let q = 1;


function changeAge(user: UserType) {
    user.age++
}


test("usrTest", () => {
    let user: UserType = {
        name: "Dima",
        age: 32,
    }

    changeAge(user)
    expect(user.age).toBe(33)

    let superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
    //mutability object
})

test("usrsTest", () => {
    let users = [
        {name: "Dima", age: 32},
        {name: "Vasia", age: 132},
    ]

    let admins = users
    admins.push({name: "Bandit", age: 10})


    expect(users.length).toBe(3)
    //mutability object
})

test("usrs2Test", () => {
    let usersCount = 100

    let adminsCount = usersCount

    adminsCount++


    expect(adminsCount).toBe(101)
    expect(usersCount).toBe(100)

    //mutability object
})