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

export async function logIn(username, password) {
  const user = { username, password }
  return request.post('/users/login')
    .send(user)
    .then(res => {
      return res.text
    })
    .catch(err => {
      console.log(err)
    })
}

export async function getTodos(username) {
  return request.get('/data/todos')
  .send(username)
  .then(res => {
    console.log(res.body)
  })
  .catch(err => {
    console.log(err)
  })
}