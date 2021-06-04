//object 
const student = {
    nameOfStudent: "Sawcon",
    age: 22,
    subject: ['html','css','js'],
    pass: true
};
console.log(student);
console.log(student.nameOfStudent);//dot ntation
console.log(student['age']);//bracket key notatio


//adding new key value pair:
student.nationality = "Chinese";
console.log(student);


//Methods and this keyword
const dog = {
    name: "Inosuba",
    age: 5,
    //methood declaration
    info: function(){
        console.log(`My dog name is ${this.name} and he is ${this. age} years old`);
    }
}
dog.info();
console.log(this);