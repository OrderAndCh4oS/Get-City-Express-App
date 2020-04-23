var express = require('express');
var router = express.Router();
const cities = require('all-the-cities');

router.get('/city/:name', function (req, res, next) {
  const name = req.params.name;
  name.length > 2
      ? res.json(cities.filter(city => city.name.match(name.charAt(0).toUpperCase() + name.slice(1))))
      : res.json([]);
});
module.exports = router;
