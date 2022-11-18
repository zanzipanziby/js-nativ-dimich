import {addSkill, changeStatus, doesStudentLiveIn, StudentType} from "./03";

export let student: StudentType;
beforeEach(()=>{
    student = {
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
})
test ('new tech skill should be added', ()=>{
    expect(student.technologies.length).toBe(5)
    addSkill(student, "GraphQl");
    expect(student.technologies.length).toBe(6)
    expect(student.technologies[5].title).toBe("GraphQl")
    expect(student.technologies[5].id).toBeDefined()
} )


test ("student should be made active", () => {
    expect(student.isStudent).toBe(true)
    changeStatus(student)
    expect(student.isStudent).toBe(false)
})
test ("Does student live in city?", ()=>{
    let result1 = doesStudentLiveIn(student, "Moscow")
    let result2 = doesStudentLiveIn(student, "Vileyka")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})