
//Loader function

document.body.classList.add("no-transactions");
setTimeout(function(){
    document.body.querySelector('#preloader').classList.add('hide');
    document.body.classList.remove("no-transactions")
}, 4000)