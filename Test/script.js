const fruits = ['orange','grap','apple']

for( const fruit of fruits)
{
    document.write(fruit + '<br/>')
}

for(let index=0; index < fruits.length ; index++ ){
    console.log(index)
    const fruit = fruits[index]
    console.log(fruit)
}