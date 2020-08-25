import request from 'superagent'

export function testDB () {
  return request.post('/test')
  .then(res => {
    return res.body
  })
}