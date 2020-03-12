// const contentSection = document.querySelector('#complemento');
// contentSection.addEventListener('click', () => {

//     // contentSection.setAttribute('background-color', '#BFBFBF');
//     contentSection.classList.toggle('complemento');
//     // contentSection.style.background='#BFBFBF'
// })


var list = [
    {
        title: "título de la lista",
        items: ["campo1", "campo2"],
    },
    {
        title: "título de la lista 2",
        items: ["campo1", "campo2"]
    }
]

var list2 = ["título de la lista", "campo1", "campo2"]

list.forEach(element => {
     //console.log(`Título : ${element.title}`);
    //console.table(element.items)
    
});
//funciónalidad imput search
function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName('wrapper');
    li = document.getElementsByTagName('li');
    //console.log(li)
    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "block";
        }else{
            li[i].style.display = 'none';
        }
    }
}
