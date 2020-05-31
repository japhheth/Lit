
//Loader function

document.body.classList.add("no-transactions");
setTimeout(function(){
    document.body.querySelector('#preloader').classList.add('hide');
    document.body.classList.remove("no-transactions")
}, 4000)



// const dropDown1 = ()=>{
//     let element1 = document.getElementById('dropMenu1');
//     let orderBody1 = document.getElementById('order-body-top-space1');
//     if(!orderBody1.classList.contains('cartColor')){
//         orderBody1.classList.add('cartColor');
//     }else{
//         orderBody1.classList.remove('cartColor')
//     }
// }

// const dropDown2 = ()=>{
//     let element2 = document.getElementById('dropMenu2');
//     let orderBody2 = document.getElementById('order-body-top-space2');
//     if(!orderBody2.classList.contains('cartColor')){
//         orderBody2.classList.add('cartColor');
//     }else{
//         orderBody2.classList.remove('cartColor')
//     }
// }

// const dropDown3 = ()=>{
//     let element3 = document.getElementById('dropMenu3');
//     let orderBody3 = document.getElementById('order-body-top-space3');
//     if(!orderBody3.classList.contains('cartColor')){
//         orderBody3.classList.add('cartColor');
//     }else{
//         orderBody3.classList.remove('cartColor')
//     }
// }
// const dropDown4 = ()=>{
//     let element4 = document.getElementById('dropMenu4');
//     let orderBody4 = document.getElementById('order-body-top-space4');
//     if(!orderBody4.classList.contains('cartColor')){
//         orderBody4.classList.add('cartColor');
//     }else{
//         orderBody.classList.remove('cartColor')
//     }
// }