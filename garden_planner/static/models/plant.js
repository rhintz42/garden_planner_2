var Plant = function(enironment, x, y, z) {
    var self = this;

    self.geometry = new THREE.BoxGeometry( 1, 1, 1 );
    self.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    self.mesh = new THREE.Mesh( self.geometry, self.material );
    if(x === undefined) {
        x = 0;
    }
    if(y === undefined) {
        y = 0;
    }
    self.mesh.position.x = x;
    self.mesh.position.y = y;
    self.mesh.position.z = 0;
}

Plant.prototype = {
    moveRelative: function(x, y, z) {
        var self = this;

        self.mesh.position.x += x;
        self.mesh.position.y += y;
        self.mesh.position.z += z;
    },

    moveToCoord: function(x, y, z) {

    }
}
