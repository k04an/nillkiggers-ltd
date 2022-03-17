const faker = require('faker')
const {fa} = require("faker/lib/locales");
faker.locale = 'fi'

const niggerAmount = 50
let niggerList = []

function getTransitionCities() {
    let transitionCities = []
    for (let i = 0; i < Math.round(Math.random() * 20); i++) {
        transitionCities.push({
            date: faker.date.past(),
            city: faker.address.city()
        })
    }
    return transitionCities
}

for (let i = 0; i < niggerAmount; i++) {
    let gender = Math.round(Math.random())
    niggerList.push({
        id: i,
        name: faker.name.findName(null, null, gender),
        sex: gender ? 'M' : 'F',
        age: faker.datatype.number({min: 18, max: 70}),
        currentLocation: faker.address.country(),
        transitions: getTransitionCities(),
        price: '$' + faker.datatype.number({min: 2000, max: 10000})
    })
}

module.exports = {
    navItems: [
        {name: 'Главная', url: '/'},
        {name: 'Каталог', url: '/catalog'},
        {name: 'Связь', url: '/contacts'}
    ],
    niggers: niggerList
}