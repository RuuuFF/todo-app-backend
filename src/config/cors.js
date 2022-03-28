module.exports = function (req, res, next) {
  const access = 'Access-Control-Allow-'

  res.header(`${access}Origin`, '*')
  res.header(`${access}Methods`, 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header(`${access}Headers`, 'Origin, X-Requested-With, Content-Type, Accept')

  next()
}