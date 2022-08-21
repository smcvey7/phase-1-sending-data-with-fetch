function submitData(string1, string2) {
  
  const formData = {
    name: string1,
    email: string2,
  }

  const configurationObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData),
  }

  const location = document.body

  return fetch('http://localhost:3000/users', configurationObject)
    .then(res => res.json())
    .then(data => {
      document.body.append(data.id)
    })
    .catch(message => document.body.append(message))
}