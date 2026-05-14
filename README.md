# HTML-Roulette

# Japanese
## 概要
画像をルーレットのように切り替えて表示するシンプルな静的Webページです。`W`キーでルーレットを開始および停止し、効果音を再生します。動作はクライアント側のHTML/CSS/JavaScriptで完結します。

## 使用技術
- 言語: HTML, CSS, JavaScript
- ライブラリ/フレームワーク: jQuery
- データベース: なし
- その他: BroadcastChannel API（オプション）、ローカルMP3ファイルを利用した音声再生

## 使い方
### 前提条件
- ブラウザ
- ローカルでファイルを開くか、簡易HTTPサーバを用意することを推奨します

### インストール方法
```bash
git clone https://github.com/username/HTML-Roulette.git
cd HTML-Roulette
```

### 基本的な使い方
- ファイルマネージャやブラウザで直接 `roullet.html` を開くか、簡易HTTPサーバで配信して開いてください。サーバ例:
```bash
# Python 3 の簡易HTTPサーバ
python -m http.server 8000
# ブラウザで http://localhost:8000/roullet.html を開く
```

## 主な機能
- キーボード操作: `W`キーでルーレット（画像切替）の開始/停止
- 効果音: ルーレット開始時にドラムロール等の音声を再生（`music/`内のmp3ファイル）
- レスポンシブ表示: 画像は画面中央にサイズ調整して表示されます（`css/roullet.css`）

## 設定
- 画像ファイルは `js/roullet.js` の `files` 配列で管理しています。追加・削除は同ファイルを編集してください。
- 効果音ファイルは `music/` フォルダに配置します。ファイル名はスクリプト内で参照されています。
- スタイルは `css/roullet.css` と `css/destyle.css` を編集して調整できます。

## APIリファレンス / ドキュメント
オプションで `BroadcastChannel` を用いたメッセージ送受信を行うことができます。

## ライセンス
MIT License

# English
## Overview
A simple static picture roulette web page. Press the `W` key to start and stop the roulette; sound effects are played from local MP3 files. The project runs entirely on the client using HTML, CSS and JavaScript.

## Technologies
- Language: HTML, CSS, JavaScript
- Libraries/Frameworks: jQuery
- Database: None
- Other: BroadcastChannel API (optional), local MP3 audio files

## Usage
### Requirements
- A modern browser with audio playback support
- For reliable resource loading, serving the files via a local HTTP server is recommended

### Installation
```bash
git clone https://github.com/username/HTML-Roulette.git
cd HTML-Roulette
```

### Basic Usage
- Open `roullet.html` in your browser or serve the directory with a simple HTTP server. Example:
```bash
# Python 3 simple server
python -m http.server 8000
# Then open http://localhost:8000/roullet.html
```

## Key Features
- Keyboard control: press `W` to start/stop the picture roulette
- Sound effects: plays drum roll and closing sound from files in `music/`
- Responsive display: images are centered and scaled via `css/roullet.css`

## Configuration
- Edit the `files` array in `js/roullet.js` to change the available images.
- Place audio files in the `music/` directory; filenames are referenced in the script.
- Adjust styles in `css/roullet.css` and `css/destyle.css` as needed.

## API Reference / Documentation
An example using `BroadcastChannel` for cross-window messaging is included in `js/roullet.js`.

## License
MIT License
