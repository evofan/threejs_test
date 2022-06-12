let camera;
let scene;
let renderer;

onResize = () => {
    console.log("onResize()");
    camera.aspect = window.innerWidth / window.innerHeight; // カメラを変更
    camera.updateProjectionMatrix(); // カメラを変更
    renderer.setSize(window.innerWidth, window.innerHeight); // レンダラーのサイズを変更
}
window.addEventListener("resize", onResize, false);

initStats = () => {
    let stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.getElementById("Stats-output").appendChild(stats.domElement);
    return stats;
}

// すべての読み込みが終わってからThree.js関連の処理を実行する
init = () => {
    console.log("init()");

    let stats = initStats();


    // Three.js関連の処理を以下に追加する

    // p13-

    // シーン（すべての表示する物体と光源を保持）を定義
    scene = new THREE.Scene();

    // カメラ（シーンを描画する時に何が見えるか）を定義
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    scene.add(camera);

    // レンダラー（カメラの角度に基づいてシーンがどのように見えるか）を定義
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0)); // 背景色を定義
    renderer.setSize(window.innerWidth, window.innerHeight); // シーンの大きさを設定
    // 影の設定を追加、これだけでは変化しない
    renderer.shadowMapEnabled = true;

    // 座表軸を追加
    // let axes = new THREE.AxisHelper(20); // 20: そぞぞれの軸の長さ
    // scene.add(axes);

    // 平面を追加
    let planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1); // 幅を60, 高さを20を指定
    // let planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc }); // 色を指定
    let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff }); // 色を指定
    let plane = new THREE.Mesh(planeGeometry, planeMaterial); // 上記2つから作成 
    plane.receiveShadow = true;

    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);

    // カメラを配置
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    // アンビエントライトを追加
    var ambientLight = new THREE.AmbientLight(0x0c0c0c);
    scene.add(ambientLight);

    // 1.5 光源を追加、p17
    let spotlight = new THREE.SpotLight(0xffffff);
    // spotlight.position.set(-20, 30, -5);
    spotlight.position.set(-40, 60, -10);
    scene.add(spotlight); // MeshBasicMaterialは光源に反応しないのでこれを追加しただけでは変化がない
    // なのでMeshLambertMaterial（光源を計算に含めるマテリアル）に変更する必要がある
    spotlight.castShadow = true; // ★影の発生源となるライトを指定（全てのlightが影を落とせるわけではないので注意）
    scene.add(spotlight);

    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    let step = 0;

    // let controls = new (function () {
    //     this.rotationSpeed = 0.02;
    //     this.bouncingSpeed = 0.03;
    // })();

    let controls = new function () {
        this.rotationSpeed = 0.02;
        // this.bouncingSpeed = 0.03;

        this.numberOfObjects = scene.children.length;

        // キューブを削除する
        this.removeCube = () => {
            let allChildren = scene.children;
            let lastObject = allChildren[allChildren.length - 1];
            if (lastObject instanceof THREE.Mesh) { // カメラやライトを消さないようにTHREE.Meshオブジェクトであるか確認する
                scene.remove(lastObject);
                this.numberOfObjects = scene.children.length;
            }

        };

        // キューブを追加する
        this.addCube = () => {

            let cubeSize = Math.ceil((Math.random() * 3));
            let cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
            let cubeMaterial = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff });
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.castShadow = true;
            cube.name = `cube-${scene.children.length}`;

            // シーンの中でキューブをランダムに配置する
            cube.position.x = -30 + Math.round((Math.random() * planeGeometry.parameters.width));
            cube.position.y = Math.round((Math.random() * 5));
            cube.position.z = -20 + Math.round((Math.random() * planeGeometry.parameters.height));

            scene.add(cube);
            this.numberOfObjects = scene.children.length;
        }

        this.outputObjects = () => {
            console.log(scene.children);
        }

    };

    let gui = new dat.GUI();
    gui.add(controls, 'rotationSpeed', 0, 0.5);
    gui.add(controls, 'addCube');
    gui.add(controls, 'removeCube');
    gui.add(controls, 'outputObjects');
    gui.add(controls, 'numberOfObjects').listen();


    renderScene = () => {
        stats.update();

        // 赤いキューブの回転
        // cube.rotation.x += controls.rotationSpeed; //0.02;
        // cube.rotation.y += controls.rotationSpeed; //0.02;
        // cube.rotation.z += controls.rotationSpeed; //0.02;

        // 青い球体の回転
        // step += controls.bouncingSpeed; //0.04;
        // sphere.position.x = 20 + 10 * Math.cos(step);
        // sphere.position.y = 2 + 10 * Math.abs(Math.sin(step));

        // rotate the cubes around its axes
        // traverse()関数は全ての子要素に対して再帰的に呼び出される＝シーングラフ全体を走査出来る
        scene.traverse((e) => {
            if (e instanceof THREE.Mesh && e != plane) {

                e.rotation.x += controls.rotationSpeed;
                e.rotation.y += controls.rotationSpeed;
                e.rotation.z += controls.rotationSpeed;
            }
        });

        requestAnimationFrame(renderScene); // 再帰で繰り返す
        renderer.render(scene, camera);

    }
    renderScene();


}
window.onload = init;
