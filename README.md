# About-AJAX

非同期処理についてじわじわ理解する

##  まずはfetchしてみる

なにはともあれfetchしなければならない。

### fetchするjsonファイルを自分で用意する

ディレクトリを作って、そのディレクトリにjsonファイルを作成する。内容は何でも良い。できるだけシンプルにした方が良い。

hello.json というファイルにする。

```
{
  "message": "Hello"
}
```

内容はこれだけ。

### jsonファイルにURLでアクセスしてみる

作成したディレクトリで、local server を立ち上げる(後述)。

hello.jsonがrootディレクトリ直下にあるとして、立ち上げたserverにブラウザで
` localhost:~/hello.json `
のurlリクエストをする。

用意したjsonファイルの内容がそのまま表示されるはず。

まずはここまで。

### そしてfetchする

ついにfetchする。

index.htmlとindex.js を作成する(.jsのファイル名は何でも良い)。

index.htmlがindex.jsを読み込めるように、index.htmlの\<body\>タグに、

```
<script src="index.js"><script>
```

と、する。

index.jsに、

```
const res = fetch('./hello.json');
  console.log(res);

```

というコードを書く。

それから(then)、localserverのルート(localhost:~/)にアクセスして、表示された index.html のコンソールを開く。

logには、`Promise: {~}` と表示されている。

ついに、fetchできた。

## fetchの返り値はPromise

fetchした返り値を、```const res = fetch('./hello.json');``` として、 "res" という変数に格納したが、その変数に格納されているのはPromise型のオブジェクトのようだ。

直感的(あるいは、希望観測的)には、"res"の中に入っているのはhello.jsonの中身で、例えば
```
JSON.parse(res);
```
とできそうな気がする。

しかし、"res"の中はPromiseなので、
```
res.json();
```
という、Promiseのメソッドを使う必要があるようだ。
これで、fetchしたデータを使えそうな気がする。

```
const data = res.json();
const message = data.message;
console.log(message);
```

などと、すればコンソールには

"hello"

という文字列が表示されそうな気がする。

しかし、コンソールにはerrorメッセージが表示される。
例えば、
`res.json is not a function ~~~`
とか。

### fetchの返り値を'.json()'する

fetchの返り値を格納した"res"には、Promiseが居る。
そのPromiseに対して、処理を実行するために、やっと非同期処理を実行することになる。

まず、取得したhello.jsonに
`.json();`
するには、

```
res.then((res) => {
  return res.json();
})
```

とする必要がある。

その結果を、"data"という変数に格納することにしよう。

```
const data = res.then((res) => {
  return res.json();
})
```

こうすることで、ようやくPromiseの中に居る"hello.json"の中にアクセス出来る。

試しに、

```
console.log(data);

```

としてみると、
\[\[PromiseResult\]\]の値が、":Object" となっている。

先程の、
```
console.log(res);
```
の時は、 \[\[PromiseResult\]\] の値は、 ":Response" となっていたはずだ。

## Objectになったhello.jsonの中身を取り出す

1. fecthが返したPromiseが変数"res"に入っている。
2. その"res"にPromiseの`.json() `メソッドを使った。
3. その返り値が、変数"data"に入っている。
4. 変数"data"に入っているのは、hello.jsonが`.json()`で、パースされた **Objectを含むPromise**。

次に、
```
const objMessage = data.then((obj) => {
  return obj.message; 
});
```
として、
```
console.log(objMessage);
```
すると、\[\[PromiseResult\]\]の値には、 "Hello ..."と表示されている。
ついに、hello.jsonのデータを取り出すことができた。

### htmlに表示する

fetchして取得したデータを、HTMLに表示することを一旦のゴールにする。

データを表示するためのhtml要素を用意する。

htmlの\<body\>要素内に、空の\<p\>タグを作る。idを付与する。とりあえず、"message"とする。
```
<body>
  <p id="message"></p>
</body>
```

JavaScriptで要素を取得する。
さきほど作成した\<p\>タグを、"messageElm"という変数に入れる。
```
const messageElm = document.getElementById('message');
```
`messageElm`に

```
data.then((obj) => { 
  messageElm.innerHTML = obj.message;  
})
```
として、パースされたhello.jsonのmessage
`{ message: "Hello" }`
を渡す。

とても冗長な書き方だ。

## コードを関数にする。

## イベントリスナーを設定する

## then をつなげる

## async await に書き換える

## then callbackについて
...



