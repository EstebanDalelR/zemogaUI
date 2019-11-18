const Airtable = require('airtable')
console.log(process.env.AIRTABLE_API_KEY)
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY
})
var base = Airtable.base('appIcM1HrKYkdyOmS')
export default base
