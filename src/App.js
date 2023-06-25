function app(content) {
  console.log(content);
}
app('import function from src/App.js ');


const messageElm = document.getElementById('message');
  
//取得
function reqJson() {
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
  

  //htmlに
  dataObj.then((obj) => {
    messageElm.innerHTML = obj.message;
  });  
}

//消去
function rm() {
  messageElm.innerHTML = '';
  console.log('removed')
}

/*error 
const res = fetch('./jsonfiles/hello.json');
console.log(res);

const data = res.json();
const msg = data.message;
console.log(msg);
*/

export { app,reqJson, rm};