 export const ages: number[]  = [18,20,22,1,100,90,14]

// const predicate = (age: number) => {
//     return age > 90
// }

export type CourseType = {
    title: string
    price: number
}

const courses: CourseType[] = [
    {title: "Html/Css", price: 110},
    {title: "JS/TS", price: 200},
    {title: "React", price: 150},
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}

const cheapCourses = [
    {title: "Html/Css", price: 110},
    {title: "React", price: 150},
]