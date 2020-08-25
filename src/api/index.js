import request from 'superagent'

export async function testDB () {
  return request.post('/test')
  .then(res => {
    return res.body
  })
}