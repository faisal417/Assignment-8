
//GPA, GRADE function for result publishing

const getGpa=(marks)=>{
    let gpa;

    if(marks>=0 && marks<33){
        gpa=0;
    }else if(marks>=33 && marks<40){
        gpa=1;
    }else if(marks>=40 && marks<50){
        gpa=2;
    }else if(marks>=50 && marks<60){
        gpa=3;
    }else if(marks>=60 && marks<70){
        gpa=3.50;
    }else if(marks>=70 && marks<80){
        gpa=4;
    }else if(marks>=80){
        gpa=5;
    }
    return gpa;
}


const getGrad=(marks)=>{
    let grad;

    if(marks>=0 && marks<33){
        grad='F';
    }else if(marks>=33 && marks<40){
        grad='D';
    }else if(marks>=40 && marks<50){
        grad='C';
    }else if(marks>=50 && marks<60){
        grad='B';
    }else if(marks>=60 && marks<70){
        grad='A-';
    }else if(marks>=70 && marks<80){
        grad='A';
    }else if(marks>=80){
        grad='A+';
    }
    return grad;
}

const gradResult=(marks)=>{
    let grad;

    if(marks>=0 && marks<1){
        grad='F';
    }else if(marks>=1.00 && marks<2.00){
        grad='D';
    }else if(marks>=2.00 && marks<3.00){
        grad='C';
    }else if(marks>=3.00 && marks<3.50){
        grad='B';
    }else if(marks>=3.50 && marks<4.00){
        grad='A-';
    }else if(marks>=4.00 && marks<5.00){
        grad='A';
    }else if(marks>=5.00){
        grad='A+';
    }
    return grad;
}


const getCgpa=(marks)=>{
    let cgpa;

    if(marks>=0 && marks<40){
        cgpa=0;
    }else if(marks>=40 && marks<45){
        cgpa=2;
    }else if(marks>=45 && marks<50){
        cgpa=2.25;
    }else if(marks>=50 && marks<55){
        cgpa=2.50;
    }else if(marks>=55 && marks<60){
        cgpa=2.75;
    }else if(marks>=60 && marks<65){
        cgpa=3.00;
    }else if(marks>=65 && marks<70){
        cgpa=3.25;
    }else if(marks>=70 && marks<75){
        cgpa=3.50;
    }else if(marks>=75 && marks<80){
        cgpa=3.75;
    }else if(marks>=80){
        cgpa=4.00;
    }
    return cgpa;
}

const getCgpaGrad=(marks)=>{
    let grad;

    if(marks>=0 && marks<40){
        grad='F';
    }else if(marks>=40 && marks<45){
        grad='D';
    }else if(marks>=45 && marks<50){
        cgpagrad='C';
    }else if(marks>=50 && marks<55){
        grad='C+';
    }else if(marks>=55 && marks<60){
        grad='B-';
    }else if(marks>=60 && marks<65){
        cgpagrad='B';
    }else if(marks>=65 && marks<70){
        grad='B+';
    }else if(marks>=70 && marks<75){
        grad='A-';
    }else if(marks>=75 && marks<80){
        grad='A';
    }else if(marks>=80){
        grad='A+';
    }
    return grad;
}

const getFinalCgpaGrad=(marks)=>{
    let grad;

    if(marks>=0 && marks<40){
        grad='F';
    }else if(marks>=40 && marks<45){
        grad='D';
    }else if(marks>=45 && marks<50){
        cgpagrad='C';
    }else if(marks>=50 && marks<55){
        grad='C+';
    }else if(marks>=55 && marks<60){
        grad='B-';
    }else if(marks>=60 && marks<65){
        cgpagrad='B';
    }else if(marks>=65 && marks<70){
        grad='B+';
    }else if(marks>=70 && marks<75){
        grad='A-';
    }else if(marks>=75 && marks<80){
        grad='A';
    }else if(marks>=80){
        grad='A+';
    }
    return grad;
}
