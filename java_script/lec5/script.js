let inBox=document.getElementById('inp');
let subButton=document.getElementById('btn');

let movieImg=document.getElementById('movies');
// console.log()
subButton.addEventListener('click',()=>{
    let inpvalu=inBox.value;
    // console.log(inBox)
    fetch(`https://imdb.iamidiotareyoutoo.com/justwatch?q='${inpvalu}'`)
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        let movies=data.description;
        console.log(movies);
        movies.map((movie)=>{
            let imgurl=movie.photo_url[1];
            console.log(imgurl);
            let img=document.createElement('img');
            let title=document.createElement('h2');
            title.innerText=movie.title;
            img.src=imgurl;
            img.classList.add('img');
            movieImg.appendChild(img);
            movieImg.appendChild(title);
        })
    })
});