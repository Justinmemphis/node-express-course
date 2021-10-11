const express = require('express')
const app = express() // invoke it

// invoked everytime user is performing GET request on domain
app.get('/',(req, res)=>{
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req,res)=>{
  res.status(200).send('About Page')
})

app.all('*',(req,res)=>{
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000,()=>{
  console.log('server is listening on port 5000...')
})

// app.get - read data
// app.post - insert data
// app.put - update data
// app.delete - delete data
// app.all - apply to all HTTP verbs
// app.use - middleware
// app.listen
