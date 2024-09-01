//complete this code

class Person {
	construction(name, age);
	this.__name__=name;
	this.__age__=age;
	
}
	get name(){
      return this.__name;
	}
    set age(newAge){
		return.__age=newAge;
	}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
