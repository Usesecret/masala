function begin11(a,b){
// let a = a > 0
// let b = b > 0
let sum = a + b
let mul = a * b
let quot
if( a > b){
    quot = Math.round(a / b) 
}
else{
    quot = Math.round(b / a)

}
console.log('sonlarning yig\'indisi ' + sum + 'ga,', 'sonlarning ko\'paytmasi ' + mul + 'ga,'+  'sonlarning moduli ' + quot + 'ga teng')
}
// begin11(5,3)

// ---------------------------------------------

function begin12(a,b){
    let c =Math.round(Math.sqrt(a * a + b * b))
    let P = a + b + c
    console.log(c + '-sonning gipatenuzasi ',P + '-sonning perimetri')
}
// begin12(2,3)

function begin16(a,b){
    let masofa = (b - a)
    console.log('a va b sonlar orasidagi masofa ' + masofa + 'ga teng')
    
}
// begin16(2,3)

// ----------------------------------------------------------------------------
function begin17(A,B,C){
    let c1 = C - A 
    console.log(c1)
    let a1 = C - B
    console.log(a1)
    let b1 = B - A
    let sum = +a1 + +b1 + +c1
    console.log(sum)
}
// begin17(2,3,6)


function begin18(A,B,C){
    let c1 = C - A   
    let a1 = C - B
    let sum = +a1 * +c1
    console.log(sum)
}
// begin18(2,3,6)

function begin20(x1,x2,y1,y2){
    // let masofa = Math.sqrt((+x2-+x1 * x2-x1) + (+y2 - +y1 * y2-y1))
    // console.log(+masofa)
    let masofa = ((+x2- +x1) * (+x2- +x1)) + ((+y2 - +y1) * (y2-y1))
    masofa = Math.round(Math.sqrt(masofa))
    console.log(+masofa)

}
// begin20(6,7,9,14)

// ----------------------------------------------------

function begin22(A,B){
    console.log('A soni ' + B +'ga '+ ', ' + 'B soni ' + A +'ga teng')
}
// begin22(2,9)

function begin23(A,B,C){
    console.log('A soni ' + B +'ga '+ ', ' + 'B soni ' + C  + ' , ' + 'C soni ' + A + 'ga teng')

}
// begin23(2,3,5)

function begin24(A,B,C){
    console.log('A soni ' + C +'ga '+ ', ' + 'B soni ' + A  + ' , ' + 'C soni ' + B + 'ga teng')

}
// begin24(2,3,5)


// -----------------------------------------------------------

function begin25(x){
    let y = 3 * Math.pow(x,6) - 6 * Math.pow(x,2) - 7
    console.log(y)
}
// begin25(5)



function begin26(x){
    let y = 4 * (Math.pow(x-3,6)) - 7 * (Math.pow(x-3,3)) + 2 
    console.log(y)
}

// begin26(5)

function begin27(A){
    let a2 = Math.pow(A,2)
    let a4 = Math.pow(A,4)
    let a8 = Math.pow(A,8)
    console.log('A ning 2-darajasi ' + a2 + ' ga , ' + 'A ning 4-darajasi ' + a4 + ' ga ,' + 'A ning 8-darajasi ' + a8 + ' ga teng' )
}
// begin27(6)


function begin28(A){
    let a2 = Math.pow(A,2)
    let a3 = Math.pow(A,3)
    let a5 = Math.pow(A,5)
    let a10 = Math.pow(A,10)
    let a15 = Math.pow(A,15)
    console.log('A ning 2-darajasi ' + a2 + ' ga , ' +'A ning 3-darajasi ' + a3 + ' ga , ' +'A ning 5-darajasi ' + a5 + ' ga , ' + 'A ning 10-darajasi ' + a10 + ' ga , ' + 'A ning 15-darajasi ' + a15 + ' ga teng' )
}
// begin28(6)

// ---------------------------------------------

function begin29(x){
    let pi = 3.14
    let R = x * (pi / 180)
    console.log(R)
}
// begin29(90)


function begin30(x){
    let pi = 3.14
    let D = x * (180 / pi)
    console.log(D)
}
// begin30(1.57)

// -----------------------------------------



function begin31(Tf){
    let Tc = Math.round((Tf - 32) *5 /9)
    console.log(Tc + 'gradus C')
}
// begin31(170)


function begin32(Tc){
    let Tf = Math.round((Tc * 9 /5) + 32)
    console.log(Tf + ' farangeyt F')
}
// begin32(170)

// -------------------------------------------------------

function begin33(y){
    let x = 1
    let a = 10000
    let kg = y * a
    console.log('1 kilo shokolad ' + a + ' so\'m , ' + y + ' kilo shokolad ' + kg + ' so\'m bo\'ladi' )
}
// begin33(2)


function begin34(a,b){
    let x = 1
    let y = 1
    let kg = a - b
    let mar = a / b
    console.log('1 kilo shokolad ' + '1 kilo konfetdan ' + kg + ' qimmat turadi' + ' va  1 kilo shokolad 1 kilo konfetdan ' + mar + ' marta qimmat bo\'ladi')
}
// begin34(20000, 4000)

// function begin35(V1, V2, t1,t2){
//     let oqim = V1 + V2
//     let qar_oqim = V1 - V2
//     let So = 
// }



