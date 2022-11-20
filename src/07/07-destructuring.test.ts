type SkillsType = {
    hardSkills:string[],
    softSkills: undefined
}
export type ManType = {
    name: string
    age: number
    skills: SkillsType
}
let man: ManType;
beforeEach(() => {
    man = {
        name: "Dima",
        age: 32,

        skills: {
            hardSkills:["Html", "Css", "React", "Redux"],
            softSkills: undefined
        }
    }
})

test ('', ()=> {
    expect(man.name).toBe("Dima")
    expect(man.skills.hardSkills).toStrictEqual(["Html", "Css", "React", "Redux"])
})
