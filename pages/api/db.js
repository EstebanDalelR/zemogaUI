import base from './_airtable_config'
import { throws } from 'assert'
export default (req, res) => {
  const people = []
  
  const table = base('Locations')

  try {
    table.select({
      view: 'Grid view'
    }).all().then(records => {
      records.forEach(function (record) {
        let location = { city: record.get('City'), name: record.get('Name'), times: record.get('Business Hours').split(','), image: (record.get('Image') ? record.get('Image')[0].url : undefined) }
        people.push(location)
      })
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 200
      res.end(JSON.stringify({ people }))
    }).catch(err => {
      throws(err)
    })
  } catch (error) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 400
    console.log(error)
  }
}
