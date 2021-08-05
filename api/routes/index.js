var express = require('express');
var router = express.Router();
const { JSONCookies } = require('cookie-parser');
const { json } = require('express');
var express = require('express')
var fs = require('fs')

/* GET home page. */

const rawData = fs.readFileSync('./routes/data.json', 'utf8')
const patients = JSON.parse(rawData)
//console.log(patients)


router.get('/', (req, res, next) => {
  console.log(patients)
  res.send(patients)

})
module.exports = router;
