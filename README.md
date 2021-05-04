# ProgrammingLecture2021
[![Auto update index.html](https://github.com/dot-cube/ProgrammingLecture2021/actions/workflows/auto-update.yaml/badge.svg)](https://github.com/dot-cube/ProgrammingLecture2021/actions/workflows/auto-update.yaml)

## これは何？
dot cube の新歓イベント「プログラミング体験講座」に参加してくれた、新入部員の成果物を公開するためのリポジトリです。

入部後の「Git体験講座」の際に、使用します。

## ファイル構成

```
├── .github
│   └── workflows
│       └── auto-update.yaml
├── .gitignore
├── README.md
└── index.html
```

### `.github/workflows/auto-update.yaml`
Git体験講座の際に追加するディレクトリの中にあるhtmlファイルへのリンクを、上記の`index.html`へ自動的に追記するためのファイルです。
htmlファイルのファイル名は`index.html`である必要があります。

追記作業は、GitHub Actions で行っています。
追記位置は、`<!---->`の下の行になります。

`<!---->`を削除すると、追記は行われません。

参考：[GitHub Actionsのドキュメント - GitHub Docs](https://docs.github.com/ja/actions)

### `.gitignore`
Gitで管理しないファイルを指定するための設定ファイルです。

参考：[ファイルを無視する - GitHub Docs](https://docs.github.com/ja/github/getting-started-with-github/ignoring-files)

### `README.md`
この文章を記述しているファイルです。
マークダウンという記法で記述しています。

参考：[基本的な書き方とフォーマットの構文 - GitHub Docs
](https://docs.github.com/ja/github/writing-on-github/basic-writing-and-formatting-syntax)

### `index.html`
[https://dot-cube.github.io/ProgrammingLecture2021/](https://dot-cube.github.io/ProgrammingLecture2021/)
にアクセスした際に表示されるファイルです。htmlというマークアップ言語で記述しています。

参考：[HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML)


## 手順書（部員向け）


## チャレンジ問題（部員向け）
Git体験講座の内容だけでは物足りない人向けです。

### 難易度：低
- [https://dot-cube.github.io/ProgrammingLecture2021/](https://dot-cube.github.io/ProgrammingLecture2021/)
の文章をより詳しく書いて、GitHubに反映する。
- ローカルリポジトリで間違った変更をCommitした後、当該Commitを取り消す。

### 難易度：中
- CSSを使って[https://dot-cube.github.io/ProgrammingLecture2021/](https://dot-cube.github.io/ProgrammingLecture2021/)
の見た目をきれいにする。

### 難易度：高
- GitHub Actions を使って[https://dot-cube.github.io/ProgrammingLecture2021/](https://dot-cube.github.io/ProgrammingLecture2021/)
の情報を更新する。

