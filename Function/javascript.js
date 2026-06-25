


const greet = function greet(){
document.getElementById('paragraph').innerHTML ='Hello ';
}

setTimeout(greet,5000);


const names = ['peter','alex','bob','smith'];
const name2 = [];

names.forEach(name => {
    console.log('Hello '+ name);  
    document.getElementById('paragraph2').innerHTML += ' Hello ' + name;
});


