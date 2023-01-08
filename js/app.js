


// const parent = document.querySelector(".parent");






const users = [
    {
        fio: 'ласетти',
        login: '1.8',
        age:2017
    },
    {
        fio: 'bmw',
        login: '2.7',
        age:2015

    },
    {
        fio: 'тико',
        login: '0,8',
        age:2001

    },
    {
        fio: 'мерседес',
        login: '3,3L',
        age:2020

    },
    {
        fio: 'малибу',
        login: '2.2',
        age:2019

    },
    {
        fio: 'майбах',
        login: 'V8',
        age:2016

    },
    {
        fio: 'хамер',
        login: 'V8',
        age:2007

    },
    {
        fio: 'кобальт',
        login: '1,5',
        age:2021

    },
    {
        fio: 'каптива',

        login: '2.0L',
        age:2008

    },
]







function filter(arr, prop, value) {
    let result = [] ,
    copy = [...arr]
    for (const item of copy) {
        if (String(item[prop]).includes(value) == true) result.push(item)
        
    }
    return result
}

function render(arr) {

const  list = document.querySelector('.users-list')
list.innerHTML = ''

const fioVal = document.getElementById('inp-fio').value,
   ageVal = document.getElementById('inp-age').value


   let newArr = [...arr]
   if (fioVal !== '') newArr = filter(newArr, 'fio' , fioVal)
   if (ageVal !== '') newArr = filter(newArr, 'age' , fioVal)


for (const user of arr) {
   const li = document.createElement('li')
   li.textContent= user.fio + ', Age: ' + user.age
    list.append(li)
    
}
    
}

document.getElementById('filter-form').addEventListener('submit', function(event){
    event.preventDefault()
    render(users)
})
render(users)











// const products = [
//     {name: 'Jacket', price: 50, category: 'clothes', count: 20},
//     {name: 'Boots', price: 120, category: 'clothes', count: 30},
//     {name: 'Iphone', price: 600, category: 'electronics', count: 5},
//     {name: 'Ipad', price: 300, category: 'electronics', count: 10}
//   ]
  
 
//   const getProductNames = R.compose(
//     R.pluck('name'),
//     R.filter(R.where({
//       category: R.equals('clothes'),
//       count: R.lt(R.__, 50),
//       price: R.lt(R.__, 100),
//     }))
//   )
  
//   console.log(getProductNames(products))












