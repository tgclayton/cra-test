import request from 'superagent'

export async function testDB() {
  return request.post('/test')
    .then(res => {
      return res.body
    })
}

export async function checkUserExists(username) {
  return request.post(`/users/check/${username}`)
    // .send('test')
    .then(res => {
      return res.text
    })
  // .catch (err => {
  //   console.log( err)
  // })
}

export async function addUser(user) {
  return request.post('/users/add')
    .send(user)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log(err)
    })
}