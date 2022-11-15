window.onload = () => {

    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

 

let excusegenerator = document.querySelector("#excuse");

let random = Math.floor(Math.random()*who.length);
let randomuno = Math.floor(Math.random()*action.length);
let randomdos = Math.floor(Math.random()*what.length);
let randomtres = Math.floor(Math.random()*when.length);




excusegenerator.innerHTML = `${who[random]} ${action[randomuno]} ${what[randomdos]} ${when[randomtres]}`


}