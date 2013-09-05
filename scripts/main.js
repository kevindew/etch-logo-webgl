var camera, scene, renderer, sphere, pointLight

function init() {
    camera = setUpCamera();
    scene = setUpScene();
    renderer = setUpRenderer();
    draw();
}

function draw() {
    requestAnimationFrame( draw );
    sphere.rotation.x += 0.001;
    sphere.rotation.y += 0.01;
    renderer.render( scene, camera );
}

function setUpScene() {
    var scene = new THREE.Scene();
    var sphereMaterial = new THREE.MeshLambertMaterial( { color: 0xFF6666 } );
    sphere = new THREE.Mesh(
        new THREE.CubeGeometry(
            100,
            100,
            100),
        sphereMaterial
    );
    scene.add( sphere );

    pointLight = new THREE.PointLight( 0xFFFFFF );

    // set its position
    pointLight.position.x = 0;
    pointLight.position.y = 0;
    pointLight.position.z = 500;

    // add to the scene
    scene.add( pointLight );
    return scene;
}

function setUpCamera() {
    var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.set( 0, 0, 500 );
    return camera;
}

function setUpRenderer() {
    var renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    return renderer;
}

init();
