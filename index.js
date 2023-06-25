import { app, reqJson, rm } from './src/App.js';

const reqBtn = document.getElementById('reqBtn');
reqBtn.onclick = reqJson;

const rmBtn = document.getElementById('rmBtn');
rmBtn.onclick = rm;

// App.jsにfunctionとして定義している
const res = fetch('./jsonfiles/hello.json');
  console.log(res);  //PromiseResult: Response

  const dataObj = res.then((res) => {
    return res.json();
  });
  console.log(dataObj); //PromiseResult: Object

  //consoleに
  const objMessage = dataObj.then((obj) => {
    return obj.message;
  }) 
  console.log(objMessage); //PromiseResult: "Hello ..."
  
/*
  //htmlに
  dataObj.then((obj) => {
    const messageElm = document.getElementById('message');
    messageElm.innerHTML = obj.message;
  });  
*/
//