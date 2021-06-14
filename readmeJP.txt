バージョンはr78を使用

日本語版特典としてVRアプリ開発とMikuMikuDanceモデルの読み込みついての解説付き

2015年現在、既に殆どのブラウザはWebGLに対応している

WebGLを最大限に生かすにはシェーダー言語を使う必要があるが、
Three.jsを使えばJavaScript APIを通じて簡単に使える

01章 初めての#Dシーン作成

WebGLを使う事で、グラフィックスカードの処理能力を直接利用して2D/3Dグラフィックスを使用出来る。
（←→CPUによる計算で処理）

Eye texture raytracer. 
http://www.vill.ee/eye/

three.js editor
https://threejs.org/editor/

動作確認にはローカルでサーバーを立てる必要がある
自分の場合、python3.xを入れて、
python -m http.server

Mongooseを使えば必要なディレクトリでMongooseを実行するだけで簡易サーバーを立ち上げられる
https://github.com/cesanta/mongoose
https://mongoose.ws/
Download Mongoose

1.4 3Dオブジェクトの表示
plane ... 二次元の長方形、地面に使用
cube ... 三次元の立方体、赤色で表示
sphere ... 三次元の球体、青色で表示
camera ... 画面には表示されない、何を出力に含めるか決める
axes ... x, y, z軸、デバッグ用のツール、x（赤）, y（緑）, z（青）で表示される




