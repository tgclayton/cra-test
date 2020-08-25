import request from 'superagent'

export function testDB () {
  return request.post('/saves')
  .then(res => {
    return res.body
  })
}