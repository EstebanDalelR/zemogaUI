import base from './_airtable_config'
import { throws } from 'assert'
export default (req, res) => {
  const user = []
  
  const table = base('Users')

  try {
    table.select({
      view: 'Grid view'
    }).all().then(records => {
      records.forEach(function (record) {
        let person = { 
          id: record.id,
          username: record.get('Username'), 
          password: record.get('Password')
        }
        user.push(person)
      })
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 200
      res.end(JSON.stringify({ user }))
    }).catch(err => {
      throws(err)
    })
  } catch (error) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 400
    console.log(error)
  }
}
