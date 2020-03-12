class Student{
    constructor(name, matricNo, major){
        this.name = name;
        this.matric = matricNo;
        this.major = major;
    }

    get Name(){
        return this.name;
    }

    set Name(name){
        this.name;
    }

    get MatricNo(){
        return this.matricNo;
    }

    set Matric(matricNo){
        this.matricNo;
    }

    get Major(){
        return this.major;
    }
    
    set Major(major){
        this.major;
    }

    Display = () =>{
        console.log(`Name: ${this.name}`);
        console.log(`Matric no.: ${this.matricNo}`);
        console.log(`Major: ${this.major}`);
    }
}

export {Student};