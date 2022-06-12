function initStats() {
    let stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.getElementById("Stats-output").appendChild(stats.domElement);
    return stats;
}

// すべての読み込みが終わってからThree.js関連の処理を実行する
function init() {
    console.log("init()");

    let stats = initStats();
    

    // Three.js関連の処理を以下に追加する

    // p13-

    // シーン（すべての表示する物体と光源を保持）を定義
    let scene = new THREE.Scene();

    // カメラ（シーンを描画する時に何が見えるか）を定義
    let camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    // レンダラー（カメラの角度に基づいてシーンがどのように見えるか）を定義
    let renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xEEEEEE)); // 背景色を定義
    renderer.setSize(window.innerWidth, window.innerHeight); // シーンの大きさを設定
    // 影の設定を追加、これだけでは変化しない
    renderer.shadowMapEnabled = true;

    // 座表軸を追加
    let axes = new THREE.AxisHelper(20); // 20: そぞぞれの軸の長さ
    scene.add(axes);

    // 平面を追加
    let planeGeometry = new THREE.PlaneGeometry(60, 20); // 幅を60, 高さを20を指定
    // let planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc }); // 色を指定
    let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff }); // 色を指定
    let plane = new THREE.Mesh(planeGeometry, planeMaterial); // 上記2つから作成 

    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);

    plane.receiveShadow = true;

    // キューブを追加
    let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    // let cubeMaterial = new THREE.MeshBasicMaterial({
    //     color: 0xff0000, wireframe: true
    // });
    let cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xff0000
    });
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;
    scene.add(cube);

    cube.castShadow = true;

    // スフィア（球形）を追加
    let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    // let sphereMaterial = new THREE.MeshBasicMaterial({
    //     color: 0x7777ff, wireframe: true
    // });
    let sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x7777ff
    });
    let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;
    scene.add(sphere);

    sphere.castShadow = true;

    // 1.5 光源を追加、p17
    let spotlight = new THREE.SpotLight(0xffffff);
    // spotlight.position.set(-20, 30, -5);
    spotlight.position.set(-40, 60, -10);
    scene.add(spotlight); // MeshBasicMaterialは光源に反応しないのでこれを追加しただけでは変化がない
    // なのでMeshLambertMaterial（光源を計算に含めるマテリアル）に変更する必要がある
    spotlight.castShadow = true; // ★影の発生源となるライトを指定（全てのlightが影を落とせるわけではないので注意）

    // カメラを配置
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    let step = 0;
    renderScene = () => {
        stats.update();
        requestAnimationFrame(renderScene)
        renderer.render(scene, camera);

        // 赤いキューブの回転
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
        cube.rotation.z += 0.02;

        // 青い球体の回転
        step += 0.04;
        sphere.position.x = 20 + 10 * Math.cos(step);
        sphere.position.y = 2 + 10 * Math.abs(Math.sin(step));

    }
    renderScene();


}
window.onload = init;
