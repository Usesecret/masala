 // 1-masala
// function test(son){
//     if(son > 0){
//         console.log(`${son} soni musbat son`)
//     }
//     else if(son == 0){
//         console.log(` son 0 ga teng`)
//     }
//     else{
//         console.log(`${son} soni manfiy son`)
//     }
// }
// test(0)
                        // 2-masala
// function test(son){
//     if(son > 0){
//         console.log(son++)
//                 }
//     else if(son == 0){
//         console.log(` son 0 ga teng`)
//                     }
//     else{
//         console.log(son= son-2)
//         }
//                     }
// test(-2)      
// if3
// function test(son){
//     if(son > 0){
//         console.log(son++)
//                 }
//     else if(son == 0){
//         console.log(son = 10)
//                     }
//     else{
//         console.log(son= son-2)
//         }
//                     }
// test(0)

// if4 and if5

// function check(){
//     //    songa aylantirib olish
//     var x = parseInt(document.querySelector('#one').value)
//     var y = parseInt(document.querySelector('#two').value)
//     var z = parseInt(document.querySelector('#three').value)
// //   musbat va manfiy sonli o'zgaruvchilar yaratish

// var mus = 0
// var manf = 0

// // if6 shart operatorlari
// if(x>0){
//     mus++
// } 
// else{
//     manf++
// }
// if(y >0){
//     mus++
// }
// else{
//     manf++
// }
// if(z>0){
//     mus++
// }
// else{
//     manf++
// }
// alert(`Musbat sonlar ${mus}`)
// alert(`Manfiy sonlar: ${manf}`)
// }
// if6 masala Sonlardan kattasini ekranga chiqarish
// function test(son1, son2){
//     var son1
//     var son2
//     if( son1 > son2){
//         console.log(`${son1} soni katta`)
//     }
//     else if(son1 == 0 && son2 == 0){
//         console.log(`sonlar 0ga teng`)
//     }
//     else{console.log(`${son2} soni katta`)}
// } 
// test(3,4)

// if7 masala Sonlardan kichigini ekranga chiqarish 
// function test(son1,son2){
//     if(son1>son2){console.log(`${son2} soni kichik`)}
//     else if(son1 == 0 && son2 == 0){
//     console.log(`sonlar 0ga teng`)
// }
//     else{
//         console.log(`${son1} soni kichik`)
//     }
// }
// test(6,888)
// if7 Kichik sonni tartibini aniqlash 

// function test(A,B){
//     var son = [A,B]
//     if(A>B){
//         console.log(son.indexOf(B))
//     }
// }
// test(9,8)

// if8  ikkta butun son berilgan bu sonlardan avval kattasni keyin kichigini chiqaruvchi programma tuzilsin 
// function test(A,B){
//     if(A<B){
//          var katta = B
//          var kichik = A
//     }
//     else{
//         katta = A
//         kichik = B
//     }
//     console.log(katta,kichik)
// }
// test(8,22)

// if9 A va B haqiqiy sonlar berilgan .Shunday qilish kerakki A son kichik B son kattaga o'\zgarib qolsin

// function test(A,B){
//     if(A<B){console.log(`${A}  ya'ni A soni soni kichik ${B}  ya'ni B soni soni katta`)}
//     if(A>B){
//         var kichik = B; var katta = A;
//         console.log(`${kichik}, ya'ni A soni kichik ${katta}  ya'ni B soni soni katta`)
//     }
//     else if(A == 0 && B == 0){
//         console.log('sonlar 0ga teng')
//     }
// }
// test(9,80)

// if10 A va B butun sonlari berilgan.Agar o'zgaruvchilar o'zaro teng bo'lmasa , A va B bu sonlarning yig'indisini  o'zlashtirsin..Agar teng bo'lsa 0ni o'zlashtirsin . A va B qiymat ekranga chiqarilsin  
// function test(A,B){
//     var sum = A + B 
//     if(A > B || A < B){
//         A = sum,  B = sum
//     }
    
//     else if(A == B){
//                 A = 0, B = 0
//             }
//             console.log(A,B)
// }
// test(0,5)

// if11  A va B butun sonlar berilgan.Agar ozgaruvchilar o'zaro teng bo'lamasa, A va B bu sonlarning kattasini o'zlashtirsin .Agar teng bo'lsa 0ni o'zlashtirsin . A va B qiymat ekranga chiqarilsin 
// function test(A,B){
//     if(A>B){
//      B= A
//     }
//     if(A<B){
//         A = B
//     }
//     else if(A == B){
//         A = 0, B = 0
//     }
//     console.log(A,B)
// }
// test(3,5)

// if12 Uchta son berilgan . Shu sonlarni kichigini aniqlovchi programma tuzilsin. 
// function test(A,B,C){
//     if(B > A  && C > A){
//         console.log(`${A} soni kichik`)
//     }
//     if(A > C && B > C ){
//         console.log(`${C} soni kichik`)
//     }
//     if(A > B && C > B ){
//         console.log(`${B} soni kichik`)
//     }
// }
// test(9,3,6)
// if13  Uchta son berilgan .Shu sonlarni o'rtachasi (ya'ni katta va kichik sonlar orasidagi son)ni aniqlang. 
// function test(A,B,C){
//     if(A>B && B>C ){
//         console.log(`${B} soni o'rtadagi son`)
// }
// if(B>A && A>C ){
//     console.log(`${A} soni o'rtadagi son`)
// }
// if(B>C && C>A ){
//     console.log(`${C} soni o'rtadagi son`)
// }
// if(A>B && C>A ){
//     console.log(`${A} soni o'rtadagi son`)
// }
// }
// test(0,120,11)

// if14 Uchta son berilgan. Shu sonlarni avval kichigini keyin kattasini ekranga chiqarilsin 
// function test(A,B,C){
//     var katta
//     var kichik
//     if(A>B && B>C && A>C){
//         katta = A,kichik = C, between =B
//     }
//     if(A>B && C>B && A>C){
//         katta = A,kichik = B,between =C
//     }
//     if(A<B && C>A && C<B){
//         katta = B,kichik = A,between =C
//     }
//     if(B>A && A>C && B>C){
//         katta = B,kichik = C,between = A
//     }
//     if(B>A && C>A && C>B){
//         katta = C,kichik = A,between = B
//     }
//     if(C>A && A>B && C>B){
//         katta = C,kichik = B,between = A
//     }
//     console.log(kichik,between,katta)
// }
// test(5,2,6)

// if15 Uchta son berilgan .Shu sonlarning yig'indisi eng katta bo'ladign ikkitasini ekranga chiqaruvchi programma tuzisin. 
// function test(A,B,C){
//     if(A+B>A+C && A+B>B+C){
//         console.log(`${A} va ${B} eng kattasi`)
//     }
//     if(A+C>A+B && A+C>B+C){
//         console.log(`${A} va ${C} eng kattasi`)
//     }
//     if(B+C>A+B && B+C>A+C){
//         console.log(`${B} va ${C} eng kattasi`)
//     }
// }
// test(7,16,59) 
// if16A, B,C haqiqiy sonlari berilgan.Agar berilgan sonlar o'sish tartibida berilgan bo'lsa ,sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgarsin. A,B ,C ning qiymatlari ekranga chiqarilsin 
// function test(A,B,C){
//     var mus
//     var manf
//     if(A < B && B < C){
//         A = A*2 , B = B*2, C = C*2
        
//     }
//     else{A = A*(-1),B = B*(-1),C = C*(-1)
     
//     }
//     console.log(A,B,C)
// }
// test(5,4,2)
// if 17 A, B,C haqiqiy sonlar o'sish va kamayish tartibida berilgan bo'lsa ,sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgarsin. A,B ,C ning qiymatlari ekranga chiqarilsin  
// function test(A,B,C){
//         var mus
//         var manf
//         if(A < B && B < C) {
//             A = A*2 , B = B*2, C = C*2
            
//         }
//         if(A > B && B > C) {
//             A = A*2 , B = B*2, C = C*2
            
//         }
//         else{A = A*(-1),B = B*(-1),C = C*(-1)
         
//         }
//         console.log(A,B,C)
//     }
//     test(5,4,2)