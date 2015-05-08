var Viewport = function(environment, container_id) {
    var self = this;

    self.environment = environment;
    self.current_controls = null;
    self.onDownPosition = new THREE.Vector2();
    self.onUpPosition = new THREE.Vector2();

    self.renderer = new THREE.WebGLRenderer();
    self.renderer.setSize( self.environment.width, self.environment.height );
    document.getElementById(container_id).appendChild( self.renderer.domElement );

    self.camera = new THREE.PerspectiveCamera( 75, self.environment.width/self.environment.height, 0.1, 1000 );
    self.camera.position.z = 5;
    
    var getMousePosition = function ( dom, x, y ) {

		var rect = dom.getBoundingClientRect();
		return [ ( x - rect.left ) / rect.width, ( y - rect.top ) / rect.height ];

	};

    var onMouseDown = function ( event ) {

        var container_dom = this.renderer.domElement;

		event.preventDefault();

		var array = getMousePosition( container_dom, event.clientX, event.clientY );
		this.onDownPosition.fromArray( array );

		document.addEventListener( 'mouseup', onMouseUp, false );

	}.bind(self);
    
    var onMouseUp = function ( event ) {
        var container_dom = this.renderer.domElement;

		var array = getMousePosition( container_dom, event.clientX, event.clientY );
		this.onUpPosition.fromArray( array );

		handleClick();

		document.removeEventListener( 'mouseup', onMouseUp, false );

	}.bind(self);
    
    self.renderer.domElement.addEventListener( 'mousedown', onMouseDown, false );
	
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
