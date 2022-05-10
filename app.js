
/*stuData.map( (data, index) => {

    // if student get more than or equal of 33 in all subjet then they will pass otherwise failed 
    let result;
    data.bangla >= 33 && data.english >= 33 && data.math >= 33 && data.science >= 33 && data.social >= 33 && data.religion >= 33 ? result = 'Passed': result = 'Failed';

    // get sum of all subject's  gpa then divide by 6. (there is 6 subjects)
    let cgpa = getGPA(data.bangla) + getGPA(data.english) + getGPA(data.math) + getGPA(data.science) + getGPA(data.social) +  getGPA(data.religion);
    cgpa = cgpa/6; 

    // if the result got 'failed' then cgpa will be 0
    result == 'Failed' ? cgpa = 0 : '';

    // console output
    console.log(`
            Name    :   ${data.name}
            Class   :   ${data.class}
            Roll    :   ${data.roll}
    ===================================================================================================
        Subject             Mark            GPA             Grade           Result           CGPA
        Bangla              ${data.bangla}              ${getGPA(data.bangla)}               ${getGrade(data.bangla)}               ${result}           ${cgpa.toFixed(2)}
        English             ${data.english}              ${getGPA(data.english)}               ${getGrade(data.english)}                    
        Maths               ${data.math}              ${getGPA(data.math)}               ${getGrade(data.math)}
        Science             ${data.science}              ${getGPA(data.science)}               ${getGrade(data.science)}
        Social Science      ${data.social}              ${getGPA(data.social)}               ${getGrade(data.social)}
        Religion            ${data.religion}              ${getGPA(data.religion)}               ${getGrade(data.religion)}
    `);

})*/

students.map((data, index)=>{
    let result= 0;
    let cgpaResult = getGpa(data.bangla) + getGpa(data.english) + getGpa(data.math) + getGpa(data.science) + getGpa(data.social) +  getGpa(data.religion);
    result = cgpaResult/6; 

    console.log(`
    Name: ${data.name}
    Class: ${data.class}
    Roll: ${data.roll}
    =============================================================
    Subject        Marks         GPA      GRAD        GPA Result        GRAD Resul                                              CGPA    CGPAGRAD
    Bangla          ${data.bangla}          ${getGpa(data.bangla)}            ${getGrad(data.bangla)}                                                                                 ${getCgpa(data.bangla)}      ${getCgpaGrad(data.bangla)}         
    English         ${data.english}          ${getGpa(data.english)}            ${getGrad(data.english)}                                                                              ${getCgpa(data.english)}     ${getCgpaGrad(data.english)}
    Math            ${data.math}           ${getGpa(data.math)}            ${getGrad(data.math)}                                                                               ${getCgpa(data.math)}       ${getCgpaGrad(data.math)}
    Science        ${data.science}           ${getGpa(data.science)}            ${getGrad(data.science)}         ${result.toFixed(2)}          ${gradResult(result.toFixed(2))}                                     ${getCgpa(data.science)}       ${getCgpaGrad(data.science)}                          ${result.toFixed(2)}          ${getFinalCgpaGrad(result.toFixed(2))}
    Religion        ${data.religion}           ${getGpa(data.religion)}            ${getGrad(data.science)}                                                                           ${getCgpa(data.religion)}     ${getCgpaGrad(data.religion)}
    S.Science        ${data.social}           ${getGpa(data.social)}            ${getGrad(data.social)}                                                                               ${getCgpa(data.social)}       ${getCgpaGrad(data.social)}
`);
})
