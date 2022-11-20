


export const man = {
    name: "Dima",
    age: 32,

    skills: {
        hardSkills:["Html", "Css", "React", "Redux"],
        softSkills: undefined
    }
}

const {age} = man
const {skills: {hardSkills}} = man
const [html, css, ...restHardSkills] = hardSkills
console.log(age, hardSkills, html, css)
console.log(restHardSkills)