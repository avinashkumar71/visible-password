const password_element = document.getElementById('password');
const icon_element = document.getElementById('icon');

icon_element.addEventListener('click',()=>{
    if(password_element.type=='password'){
        icon_element.src = 'photos/visible.png';
        password_element.type = 'text';
    }else{
        icon_element.src = 'photos/not-visible.png';
        password_element.type = 'password';
    }
    
})