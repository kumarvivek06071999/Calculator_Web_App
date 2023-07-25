const  express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/catering',(req,res)=>{
  // res.send('working')
  res.sendFile(__dirname + '/index.html')
})
app.get('/',(req,res)=>{
  // res.send('working')
  res.sendFile(__dirname + '/calculator.html')
})

app.post('/calculator',(req,res)=>{
  const num1 = parseFloat(req.body.num1)
  const num2 = parseFloat(req.body.num2)
  const  result = num1 + num2
  res.send(`Sum of two number is ${result}`)
})

app.listen(3000,()=>{
  console.log('Port is running on 3000');
})