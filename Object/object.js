const object ={
    'name' :'Anas',
    'age':26,
    'gender':'male',
}

// console.log(object)
document.getElementById('object').innerHTML='Name : ' + object.name + '';


const new_obj = new Object({
    'name' :'Jane',
    'age':27,
    'gender':'female',
});

document.getElementById('new_object').innerHTML='Name : ' + new_obj.name + '';