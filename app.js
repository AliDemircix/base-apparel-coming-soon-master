const submitBtn = document.querySelector(".submit");
const inputValue = document.querySelector(".mail-input");
const notificationMsg = document.querySelector(".message");
submitBtn.addEventListener('click', function(e){
   
    if(inputValue.value.length===0){
        e.preventDefault();
        notificationMsg.textContent="It can not be empty";
        setTimeout(function(){ notificationMsg.textContent=""; }, 3000);
    }
})