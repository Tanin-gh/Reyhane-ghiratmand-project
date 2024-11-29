   function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode")

}

function goTocontact() {
    window.location.href = 'contact.html#middle';
}
function goToshop() {
    window.location.href = 'shop.html#main-shop';
}
document.getElementById('contactform').addEventListener('submit', function(event){
    event.preventDefault(); 

    var name = document.getElementById('username').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var title = document.getElementById('title').value;
    var message = document.getElementById('message').value;


    const successMessage =  ' Dear '   +name+  ', with phone number :'  +phone+  ' and email: ' +email+' , thank you for your message.';
    
    if( name=='' ){
        alert('please fill the name fild');
    }
    else if( phone==''){
        alert('please fill the phone number fild');
    }
    else if( email==''){
        alert('please fill the email fild');
    }
    else if( title==''){
        alert('please fill the title fild');
    }
    else if( message==''){
        alert('please fill the message fild');
    }
    else{
        alert(successMessage);
    }
   
    
});


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onscroll = function() {
    let scrollButton = document.getElementById("scrollButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
};