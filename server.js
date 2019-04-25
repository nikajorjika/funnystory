const express = require('express')
const mocker = require('mocker-data-generator').default
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

const feed = {
  firstName: {
    faker: 'name.firstName'
  },
  country: {
    faker: 'address.country'
  },
  createdAt: {
    faker: 'date.past'
  },
  username: {
    function: function () {
      return (
        this.object.firstName.substring(0, 3) +
        Math.floor(Math.random() * 10)
      )
    }
  }
}

app.get('/api/feed', (req, res) => {
  mocker()
    .schema('feed', feed, 32)
    .build(function (error, data) {
      if (error) {
        throw error
      }
      res.send(data.feed)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
