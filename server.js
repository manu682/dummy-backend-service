const express = require('express')
var cors = require('cors');
const app = express()
const port = 3000

app.use(cors());

app.get('/static-data', (req, res) => {
  var staticData = '{"students": ['+
  '{"id":"test1", "name": "Test1", "age": "21", "department": "CS"},'+
  '{"id":"test2", "name": "Test2", "age": "21", "department": "CS"},'+
  '{"id":"test3", "name": "Test3", "age": "21", "department": "CS"},'+
  '{"id":"test4", "name": "Test4", "age": "21", "department": "CS"},'+
  '{"id":"test5", "name": "Test5", "age": "21", "department": "CS"},'+
  '{"id":"test6", "name": "Test6", "age": "21", "department": "CS"},'+
  '{"id":"test7", "name": "Test7", "age": "21", "department": "CS"},'+
  '{"id":"test8", "name": "Test8", "age": "21", "department": "CS"},'+
  '{"id":"test9", "name": "Test9", "age": "21", "department": "CS"},'+
  '{"id":"test10", "name": "Test10", "age": "21", "department": "CS"}'+
  '], "total": 10}';
  res.setHeader('Content-Type', 'application/json');
  res.send(staticData);
});

app.get('/dynamic-data', (req, res) => {
  var dynamicData = "{students: [";
  for (i = 0; i < 1000; i++) {
    dynamicData += '{"id":"'+i+'", "name": "Test"'+i+', "age": "21", "department": "CS'+i+'"},';
  }
  dynamicData += "]}";

  res.send(dynamicData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});