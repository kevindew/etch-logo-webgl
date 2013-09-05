var camera, scene, renderer, shape, pointLight

function init() {
    camera = setUpCamera();
    scene = setUpScene();
    renderer = setUpRenderer();
    draw();
}

function draw() {
    requestAnimationFrame( draw );
    // shape.rotation.y += 0.01;
    renderer.render( scene, camera );
}

function setUpScene() {
    var x, y, width, height;
    var scene = new THREE.Scene();
    var shapeMaterial = new THREE.MeshLambertMaterial( { color: 0xFF6666, side: THREE.DoubleSide } );
    // shapeMaterial.opacity = 0.5;

    width = height = 300;

    var shapeStructure = new THREE.Shape();
    shapeStructure.moveTo( 0, 0 );
    shapeStructure.lineTo( width, 0 );
    shapeStructure.lineTo( width, height );
    shapeStructure.lineTo( 0, height );

    var eHole = new THREE.Path();
    eHole.moveTo( 62.93, height - 183.242 ); // bottom left
    eHole.lineTo( 110.176, height - 183.242 ); // bottom right
    eHole.lineTo( 110.176, height - 170.98 );
    eHole.lineTo( 75.968, height - 170.98 );
    eHole.lineTo( 75.968, height - 150.479 ); // middle top left
    eHole.lineTo( 97.918, height - 150.479 ); // middle top right
    eHole.lineTo( 97.918, height - 138.216 ); // middle bottom right
    eHole.lineTo( 75.968, height - 138.216 ); // middle bottom left
    eHole.lineTo( 75.968, height - 124.218 );
    eHole.lineTo( 110.176, height - 124.218 );
    eHole.lineTo( 110.176, height - 111.957 ); // top right
    eHole.lineTo( 62.93, height - 111.957); // top left

    shapeStructure.holes.push( eHole );

    var tHole = new THREE.Path();
    tHole.moveTo( 117.152, height - 183.242 ); // bottom left
    tHole.lineTo( 137.038, height - 183.242 ); // bottom right
    tHole.lineTo( 137.038, height - 170.98 );
    tHole.lineTo( 129.853, height - 170.98 );
    tHole.lineTo( 129.853, height - 138.258 );
    tHole.lineTo( 143.626, height - 138.258 ); // top right
    tHole.lineTo( 117.152, height - 111.822 ); // top left

    shapeStructure.holes.push( tHole );

    var cHole = new THREE.Path();
    cHole.moveTo( 166.268, height - 171.521 );
    cHole.bezierCurveTo( 160.285, height - 171.521, 155.435, height - 166.672, 155.435, height - 160.688 );
    cHole.bezierCurveTo( 155.435, height - 157.776, 156.586, height - 155.129, 158.454, height - 153.239 );
    cHole.lineTo( 149.472, height - 144.253 );
    cHole.bezierCurveTo( 145.304, height - 148.678, 142.731, height - 154.316, 142.731, height - 160.738 );
    cHole.bezierCurveTo( 142.731, height - 174.096, 153.269, height - 184.637, 166.269, height - 184.637 );
    cHole.bezierCurveTo( 172.691, height - 184.637, 178.509, height - 182.063, 182.753, height - 177.895 );
    cHole.lineTo( 173.769, height - 168.910 );
    cHole.bezierCurveTo( 171.822, height - 170.369, 169.18, height - 171.521, 166.268, height - 171.521 );

    shapeStructure.holes.push( cHole );

    // var hHole = new THREE.Path();



    // shapeStructure.holes.push( hHole );

    shape = new THREE.Mesh(
        new THREE.ShapeGeometry( shapeStructure ),
        shapeMaterial
    );

    shape.position.y = -150;
    shape.position.x = -150;
    shape.position.z = -100;
    // shape.rotation.y = -0.3;

    scene.add( shape );

    pointLight = new THREE.PointLight( 0xFFFFFF );

    // set its position
    pointLight.position.x = 0;
    pointLight.position.y = 0;
    pointLight.position.z = 500;

    // add to the scene
    scene.add( pointLight );

    // spotLight = new THREE.SpotLight( 0xFFFFFF );

    // // set its position
    // spotLight.position.x = 400;
    // spotLight.position.y = 400;
    // spotLight.position.z = 1000;

    // // add to the scene
    // scene.add( spotLight );

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
