import base from './_airtable_config'
import { throws } from 'assert'
export default (req, res) => {
  const people = []
  
  const table = base('Cards')

  try {
    table.select({
      view: 'Grid view'
    }).all().then(records => {
      records.forEach(function (record) {
        let person = { 
          category: record.get('Category'), 
          name: record.get('Name'), 
          postedAt: record.get('PostedAt'), 
          ImageURL: record.get('ImageURL'), 
          votes: {
            positive: record.get('Positive'),
            negative: record.get('Negative')
          }
        }
        people.push(person)
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
