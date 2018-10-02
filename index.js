const express = require('express')
const path = require('path')
const cool = require('cool-ascii-faces');
const PORT = process.env.PORT || 5000
const favicon = require('serve-favicon');






express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(favicon(__dirname + '/public/img/favicon.ico/favicon.ico'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/market', (req, res) => res.render('pages/market'))
  .get('/home', (req, res) => res.render('pages/home-new'))
  .get('/tutorials', (req, res) => res.render('pages/tutorials'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/blog', (req, res) => res.render('pages/blog'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


