import axios from 'axios'

const user = JSON.parse(localStorage.getItem("to-do"))
axios.defaults.headers.common['authorization'] = `bearer ${user.token}`

const createTodo = (data) => {
    return axios.post("http://localhost:4000/api/v1/todo/create", data);
}

const TodoServices = { createTodo }
export default TodoServices