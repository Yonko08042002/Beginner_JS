// Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));


// const items = document.querySelectorAll('.item');

// items.forEach((item)=>console.log(item));

// for(item of items){
//     console.log(item)
// }

// items.forEach((item)=> console.log(item));

// const ul =document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.remove();

// ul.firstElementChild.textContent = 'Hello';

// ul.children[1].innerText='Brad';
// ul.lastElementChild.innerHTML ='<h4>Hello Linh</h4>'


// const btn = document.querySelector('.btn');

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     document.querySelector('.items').firstElementChild.innerHTML = '<p>hello</p>'

// });

// const btn =document.querySelector('.btn');
//  btn.addEventListener('click',clickBtn);

//  function clickBtn(e){
//     e.preventDefault();
//     document.querySelector('body').classList.add('bg-dark')
//  }

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput  = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit)

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value ==='' || emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML = '<p>Please input name and email</p>';

        setTimeout(()=>msg.remove(),1000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);    
        //Clear fields
        nameInput.value='';
        emailInput.value='';
    }
  }