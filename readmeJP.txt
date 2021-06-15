バージョンはr78を使用

日本語版特典としてVRアプリ開発とMikuMikuDanceモデルの読み込みついての解説付き

2015年現在、既に殆どのブラウザはWebGLに対応している

WebGLを最大限に生かすにはシェーダー言語を使う必要があるが、
Three.jsを使えばJavaScript APIを通じて簡単に使える

■01章 初めての3Dシーン作成

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

1.6
setInterval()はブラウザがタブの状態を考慮しない、画面の再描画とは同期されない等の問題点がある
requestAnimationFrame()を使う、ブラウザによって定義された間隔で呼び出され、ブラウザが出来るだけ滑らかに描画される事が保証される



■02章 シーンの基本要素

2.1 シーンの作成

シーン表示に必要なコンポーネント
camera ... シーンに何を描画するか決める
light ... マテリアルがどのように表示され、影がどのように使用されるか
object ... カメラ視点内に表示される物体、球体や立方体

Three.SCENEはオブジェクトを全て保持するコンテナ
Three.SCENEははシーングラフとも呼ばれ、ノードを木構造で保持する
Three.SCENEはThree.Object3D（childrenを持つ）を継承している

Three.Scene.add() ... オブジェクトをシーンに追加
Three.Scene.remove() ... オブジェクトをシーンから削除
Three.Scene.children ... シーン内の全ての子要素を取得
Three.Scene.getObjectByName ... 名前を指定してシーンから特定のオブジェクトを取得

