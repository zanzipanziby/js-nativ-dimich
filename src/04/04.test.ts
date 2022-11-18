import {CourseType} from "./04";
test("should take old men older then 90", () => {
    const ages: number[] = [18, 20, 22, 1, 100, 90, 14]
    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should be cheaper 160', ()=> {
    const courses: CourseType[] = [
        {title: "Html/Css", price: 110},
        {title: "JS/TS", price: 200},
        {title: "React", price: 150},
    ]

    const cheapCourses = courses.filter(p => p.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe("Html/Css")
})