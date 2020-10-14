import request from 'superagent'

export async function testDB() {
  return request.post('/test')
    .then(res => {
      return res.body
    })
}

export async function checkUserExists(username) {
  return request.post(`/users/check/${username}`)
    .then(res => {
      return res.text
    })
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

export async function getTodosByUsername(username) {
  return request.post('/data/findTodos')
  .send({username})
  .then(res => {
    return (res.body)
  })
  .catch(err => {
    console.log(err)
  })

}export async function apiAddTodo(username, todo) {
  // console.log(`${JSON.stringify(todo)}, ${username}, entered addTodo`)
  const data = {username, todo}
  return request.post('/data/todos')
  .send(data)
  .then(res => {
    console.log(res.text)
  })
  .catch(err => {
    console.log(err)
  })
}