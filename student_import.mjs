import{Student} from './student_export.mjs';

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your name: ', (name) => {
    rl.question ('Please enter your matric no.: ', (matricNo) => {
        rl.question('Please enter your major: ',  (major) => {            
            let student = new Student(name, matricNo, major);

            console.log(student);

            rl.close();
        });
    });
});