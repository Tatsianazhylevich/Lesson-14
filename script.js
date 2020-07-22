// =======================TASK 1===================================

// ==============Registration======================

let login = prompt('Ведите ваш логин');
let password = prompt('Придумайте пароль');

while (password.length < 4) {
    password = prompt ('Слишком короткий пароль. Попробуйте еще раз');
}



let userAccept = confirm('Хотите войти в систему?');

// ==========CHECK=======
console.log(login);
console.log(password);

//================Authorization====================

let user = {
    login,
    password
}

for(key in user) {
    user.login = prompt('Введите ваш логин');
    if(user.login === login) {
        user.password = prompt('Введите пароль');
        if(user.password === password) {
            alert(`Привет, ${user.login}`);
            break;
        }else {
            user.password = prompt('Неверно введен пароль. Попробуйте еще раз');
            if(user.password === password) {
                alert('Вы успешно вошли в систему!')
                break;
            }
        }
    } else { 
        alert('Такой пользователь не найден');
    }
}

// =========================================TASK 2=======================

var persons = [
     {id: 10, name: 'Vasya', age: 28},
     {id: 11, name: 'Kolya', age: 16, parentId: 14},
     {id: 12, name: 'Anna', age: 37},
     {id: 13, name: 'Zoya', age: 9, parentId: 12},
     {id: 14, name: 'Arkadiy', age: 45},
 ];

let adult = [];
let child = [];

 for(let i=0; i <persons.length; i++) {
    if (persons[i].age >=18) {
        adult.push(persons[i]);
        persons[i].job = prompt(`Кто вы по профессии, ${persons[i].name}?`);
    } else {
        child.push(persons[i]);
    }
}


for(let i=0; i <child.length; i++) {
    for(let a = 0; a < adult.length; a++) {
        if(child[i].parentId === adult[a].id) {
            adult[a].child = child[i].id;
        }    
    } 
}
console.log(persons);
console.log(adult);
console.log(child);
