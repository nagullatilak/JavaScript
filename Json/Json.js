//Json data basics
// 1. keys should be mentioned in " "
//2 . No function values are allowed
/*{
    "firstName" : "Tilak sai kunar",
    "age"     : 23
}*/
//Pretty Json
var school = {
    "name" : "Sri Vidhya",
    "classes" :[
        {
            "className" :" Java ",
            "teacher" : "Manjusha ",
            "courseId" : "0976",
            "credits" : 3
        },
        {
            "className" :"C#",
            "teacher" : "RajaSri",
            "courseId" : "0987",
            "credits" : 3
        },
        {
            "className" :"Elective",
            "teacher" : "RajaSri",
            "courseId" : "0675",
            "credits" : 0
        }
    ]
}
console.log(school)
console.log(school.classes)
console.log(school.classes[0])
console.log(school.classes[0].className)

//Minified Json
var school = {"name":"Sri Vidhya","classes":[{"className":" Java ","teacher":"Manjusha ","courseId":"0976","credits":3},{"className":"C#","teacher":"RajaSri","courseId":"0987","credits":3},{"className":"Elective","teacher":"RajaSri","courseId":"0675","credits":0}]}