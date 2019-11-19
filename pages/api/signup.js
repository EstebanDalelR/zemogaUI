import base from './_airtable_config'
import { throws } from 'assert'
export default (req, res) => {
   const table = base('Users')
  try {
    table.create([{"fields": req.body}], function(err, records) {
      if (err) {
        console.log(err)
        throws(err);
        return;
      }
      records.forEach(function (record) {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(record.getId()))
      });
    });
  } catch (error) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 400
    console.log(error)
    throws(error);
  }
}
