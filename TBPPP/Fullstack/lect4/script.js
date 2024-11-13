// const root=document.getElementById('container');
// const btn=document.getElementById('btn');
// btn.addEventListener('click',()=>{
//     container.
//     container.style.color="green";
//     const div=document.createElement('div');
//     div.innerText='this is new div';
//     div.style.border="2px solid red";
//     container.appendChild(div);
// })

const root = document.getElementById("taskList");
const addbtn = document.getElementById('btn1');
const detbtn= document.getElementById('btn2');
const taskAdd = document.getElementById('task');
const delall=document.getElementById('delall');
const h3=document.getElementById('h3');
addbtn.addEventListener('click', () => {
    if (taskAdd.value !== '') {
        h3.style.color="green";
        const list = document.createElement('li');
        list.innerText = taskAdd.value;
        list.classList.add('list');
        root.appendChild(list);
        taskAdd.value = "";
    }
});

detbtn.addEventListener('click', () => {
    const li = document.getElementsByClassName('list');
    if (li.length > 0) {
        h3.style.color="red";
        root.removeChild(li[0]);
    }
});
delall.addEventListener('click',()=>{
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
    h3.style.color="black";
})