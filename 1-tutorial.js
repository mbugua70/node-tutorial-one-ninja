const student = "mary";
console.log(student)

// global objects
const school = "Teremi High School"
setTimeout(() =>{
   console.log(school)
}, 2000)


const funOne = () =>{
    setInterval(() =>{
     console.log("john doe")
    }, 2000)
}

funOne()


// __dirname, __filename

console.log(__dirname) //this one will get the absolute path of the direct folder
console.log(__filename) // this one will get the absolute path of the directory together with the filename
