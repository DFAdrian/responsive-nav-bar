const btn = document.querySelector('button');
const links = document.getElementById('links');

btn.addEventListener('click',()=>{
    links.classList.toggle('appear');
})