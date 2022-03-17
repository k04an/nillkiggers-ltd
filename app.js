const app = require('express')()
const data = require('./data')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let niggerList = data.niggers
    niggerList = niggerList.slice(niggerList.length - 7, niggerList.length - 1)

    res.render('index', {
        nav: data.navItems,
        pageTitle: 'Главная',
        active: 0,
        niggers: niggerList
    })
})

app.get('/details/:id', (req, res) => {
    if (data.niggers.map(nigger => {return nigger.id}).indexOf(Number(req.params.id)) !== -1) {
        res.render('details', {
            nav: data.navItems,
            pageTitle: 'Подробно',
            nigger: data.niggers[req.params.id],
            active: null
        })
    } else {
        res.end()
    }
})

app.get('/catalog', (req, res) => {
    let niggerList = data.niggers
    niggerList = niggerList.slice(0, 6)

    res.render('catalog', {
        nav: data.navItems,
        pageTitle: 'Каталог',
        active: 1,
        page: 1,
        pageAmount: Math.ceil(data.niggers.length / 9),
        niggers: niggerList
    })
})

app.get('/catalog/:page', (req, res) => {
     if (Math.ceil(data.niggers.length / 9) < req.params.page || req.params.page <= 0) {
         res.end()
         return
     }

    let niggerList = data.niggers
    niggerList = niggerList.slice(9 * (req.params.page - 1), (9 * (req.params.page - 1) + 9))

    res.render('catalog', {
        nav: data.navItems,
        pageTitle: `Каталог | ${req.params.page}`,
        active: 1,
        page: req.params.page,
        pageAmount: Math.ceil(data.niggers.length / 9),
        niggers: niggerList
    })
})

app.get('/contacts', (req, res) => {
    res.render('contacts', {
        nav: data.navItems,
        pageTitle: 'Связь',
        active: 2
    })
})

app.listen(process.env.PORT || 80, () => {
    console.log('Server is up')
})