const res = fetch('./hello.json');
console.log(res);

const data = res.then((res) => {
  return res.json();
});

console.log(data);
