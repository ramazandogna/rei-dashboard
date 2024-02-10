const getUserFromToken = (req, res, next) => {
  const token = req.cookies.token
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(err)
        res.status(401).json({ error: 'Unauthorized' })
      } else {
        req.user = decoded
        next()
      }
    })
  } else {
    res.status(401).json({ error: 'Unauthorized' })
  }
}

module.exports = { getUserFromToken }
