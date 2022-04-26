/* js */
document.addEventListener('DOMContentLoaded',()=>{
    /* header */
    const box1=document.querySelector('li.quick1');
    box1.addEventListener('click',()=>{
        box1.classList.toggle('on');
    })
    const box2=document.querySelector('li.quick2');
    box2.addEventListener('click',()=>{
        box2.classList.toggle('on');
    })
})
