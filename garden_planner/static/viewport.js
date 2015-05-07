var Viewport = function(environment, container_id, signals) {
    var self = this;

    this.signals = signals;
    this.environment = environment;

    self.camera = new THREE.PerspectiveCamera( 75, self.environment.width/self.environment.height, 0.1, 1000 );

    self.renderer = new THREE.WebGLRenderer();
    self.renderer.setSize( self.environment.width, self.environment.height );
    document.getElementById(container_id).appendChild( self.renderer.domElement );

    self.camera.position.z = 5;

    self.render();
}

Viewport.prototype = {
    render: function() {
        var self = this;
        requestAnimationFrame( self.render.bind(self) );

        //self.cube.rotation.x += 0.01;
        //self.cube.rotation.y += 0.01;

        self.renderer.render(self.environment.scene, self.camera);
    }
}
