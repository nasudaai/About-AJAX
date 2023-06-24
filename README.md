# About-AJAX

非同期処理についてじわじわ理解する

##  まずはfetchしてみる

なにはともあれfetchしなければならない。

### fetchするjsonファイルを自分で用意する

ディレクトリを作って、そのディレクトリにjsonファイルを作成する。内容は何でも良い。できるだけシンプルにした方が良い。

hello.json というファイルにする。

```
{
  "message": "hello"
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

index.htmlとindex.js を作成する(ファイル名は何でも良い)。

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