
// GRAD, GPA and CGPA clculation

students.map((data, index)=>{
    let result= 0;
    let gpaResult = getGpa(data.bangla) + getGpa(data.english) + getGpa(data.math) + getGpa(data.science) + getGpa(data.social) +  getGpa(data.religion);
    result = gpaResult/6; 

    let CgpaResult= 0;
    let CgpaResult1 = getCgpa(data.bangla) + getCgpa(data.english) + getCgpa(data.math) + getCgpa(data.science) + getCgpa(data.social) +  getCgpa(data.religion);
    CgpaResult = CgpaResult1/6; 

    console.log(`
    Name: ${data.name}
    Class: ${data.class}
    Roll: ${data.roll}
    =============================================================
    Subject        Marks         GPA      GRAD        GPA Result        GRAD Resul                                              CGPA    CGPAGRAD
    Bangla          ${data.bangla}          ${getGpa(data.bangla)}            ${getGrad(data.bangla)}                                                                                 ${getCgpa(data.bangla)}      ${getCgpaGrad(data.bangla)}         
    English         ${data.english}          ${getGpa(data.english)}            ${getGrad(data.english)}                                                                              ${getCgpa(data.english)}     ${getCgpaGrad(data.english)}
    Math            ${data.math}           ${getGpa(data.math)}            ${getGrad(data.math)}                                                                               ${getCgpa(data.math)}       ${getCgpaGrad(data.math)}
    Science        ${data.science}           ${getGpa(data.science)}            ${getGrad(data.science)}         ${result.toFixed(2)}          ${gradResult(result.toFixed(2))}                                     ${getCgpa(data.science)}       ${getCgpaGrad(data.science)}                          ${CgpaResult.toFixed(2)}          ${getFinalCgpaGrad(CgpaResult.toFixed(2))}
    Religion        ${data.religion}           ${getGpa(data.religion)}            ${getGrad(data.science)}                                                                           ${getCgpa(data.religion)}     ${getCgpaGrad(data.religion)}
    S.Science        ${data.social}           ${getGpa(data.social)}            ${getGrad(data.social)}                                                                               ${getCgpa(data.social)}       ${getCgpaGrad(data.social)}
`);
})
