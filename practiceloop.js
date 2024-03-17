const names = ['Ken', 'Adaora','Nwando','David'];

for(let i = 0; i < names.length ; i++) {
  console.log(names[i])
 if (i === 3) break;//
}

for(name of names)console.log(name);

const user = {firstName: 'John',lastName: 'Doe'};
for (key in user) console.log(user[key]);


let i = 0;
while(i < 10) {
  i++
  if (i === 5) break
  console.log(i);
}

const animals = ['Lion','Tiger','Cheetah', 'Goat']

animals.forEach(animal => {console.log(animal)});


const contain = document.getElementById('container') 
for (let i = 0; i < 100 ; i++){
  const buttons =document.createElement('button');
  buttons.innerText ='We gather dey!' ;
 contain.appendChild(buttons);
}