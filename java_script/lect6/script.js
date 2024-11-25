let container=document.getElementById('container');

container.addEventListener('click',(e)=>{
    
    if(e.target.tagName=='BUTTON'){
        let val=e.target.textContent;
        console.log(val);
    }
})