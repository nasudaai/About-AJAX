# About-AJAX

非同期処理についてじわじわ理解する

##  まずはfetchしてみる

なにはともあれfetchしなければならない。

### >>fetchするjsonファイルを自分で用意する

ディレクトリを作って、そのディレクトリにjsonファイルを作成する。内容は何でも良い。できるだけシンプルにした方が良い。

hello.json というファイルにする。

```
{
  "message": "hello"
}
```

内容はこれだけ。

### >>jsonファイルにURLでアクセスしてみる

作成したディレクトリで、local server を立ち上げる(後述)。

hello.jsonがrootディレクトリ直下にあるとして、立ち上げたserverにブラウザで
` localhost:~/hello.json `
のurlリクエストをする。

用意したjsonファイルの内容がそのまま表示されるはず。

まずはここまで。

### >>そしてfetchする

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
res.json();
```
とすれば、fetchしたデータをそのまま使えそうな気がする。

```
const data = res.json();
const message = data.message;
console.log(message);
```

などと、すればコンソールには

"hello"

という文字列が表示されそうな気がする。

しかし、実際にはそうはならない。おそらく、コンソールにはerrorメッセージが表示される。
例えば、
`res.json is not a function ~~~`
とか。

### >>fetchの返り値を'.json()'する

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

としてみて欲しい。
\[\[PromiseResult\]\]の値が、":Object" となっている。

先程の、
```
console.log(res);
```
の時は、 \[\[PromiseResult\]\] の値は、 ":Response" となっていたはずだ。

