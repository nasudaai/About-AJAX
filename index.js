//import { app, reqJson, rm } from './src/App.js';
//import { hanakoJson, hanakoObj } from './src/json.js';
//import check


function reqJson() {
  const res = fetch('./jsonfiles/hello.json');
  console.log(res);

  const dataObj = res.then((res) => {
    return res.json();
  });
  console.log(dataObj);
  const objMessage = dataObj.then((dataObjstyle="display: block;") => {
    return dataObj.message;
  }) 
  console.log(objMessage);

  const messageElm = document.getElementById('message');
  dataObj.then((obj) => {
    messageElm.innerHTML = obj.message;
  });  
}

const res = fetch('./jsonfiles/hello.json');
console.log(res);

const dataObj = res.then((res) => {
  return res.json();
});
console.log(dataObj);
const objMessage = dataObj.then((dataObj) => {
  return dataObj.message;
}) 
console.log(objMessage);

const messageElm = document.getElementById('message');
dataObj.then((obj) => {
  messageElm.innerHTML = obj.message;
});

function rm() {
  messageElm.innerHTML = '';
}

/*
const dataJson = dataObj.then((Obj) => {
  return JSON.stringify(Obj);
});
console.log(dataJson);
*/


/*
const resHanako = fetch('./jsonfiles/hanako.json');
console.log(resHanako);

const dataHanako = resHanako.then((resHanako) => {
  return resHanako.json();
});
console.log(dataHanako);
*/

//log(hanakoObj);
//log(hanakoJson);