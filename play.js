// how to use fetch async
async function fun() {
	const res = await fetch(`http://localhost:5000/khaled`)
	const data = await res.json()
	console.log(data)
}
async function exampleFetch() {
	const response = await fetch(`https://reqres.in/api/users/2`)
	const json = await response.json()
	console.log(json)
}

// how to use fetch synchronously
function fun2() {
	fetch(`http://jsonplaceholder.typicode.com/users`, {
		method: `GET`,
	})
		.then(function (response) {
			return response.json()
		})
		.then(function (json) {
			// use the json
			console.log(json)
		})
}
function fun3() {
	fetch(`http://localhost:5000/khaled`, {
		method: `GET`,
	})
		.then(function (response) {
			return response.json()
		})
		.then(function (json) {
			// use the json
			console.log(json)
		})
}

//from our project
async function fun4() {
	const res = await fetch(`http://localhost:5000/api/students`)
	const data = await res.json()
	console.log(data)
}

let d = {
	first_name: `aaaaaaaaaaaaaaaaaaaa`,
}
// post with axios
async function fun5() {
	const { data } = await axios.post(`http://localhost:5000/api/students`, d)
	console.log(data)
}
// delete with axios
async function fun6(id) {
	const data = await axios.delete(`http://localhost:5000/api/student/${id}`)
	console.log(data)
}
//update
async function fun7(id) {
	const { data } = await axios.patch(`http://localhost:5000/api/student/${id}`, d)
	console.log(data)
}
fun4()