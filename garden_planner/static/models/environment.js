/*
    PUT OPERATION STUFF INTO LIB
    
    Things todo
    * Should have a viewport class that contains camera, projector, renderer and mouse events
    * Clean up the classes so that they are in different sections
    * Add comments to all of the classes/functions
    * Create Diagram of everything to keep track of what I'm doing
    * Create another plant mesh object

    * Start focusing on the terrain
        * Give the terrain a proper texture -- DONE
            * Copy from old_garden_planner  -- WILL NOT DO
        * Be able to edit the terrain to go up
            * If an object there, the object goes up with the ground
        * Be able to edit the terrain to go down
        * Be able to make the terrain not rectangle
        * Be able to edit the terrain to get wider at points
        * Be able to edit the terrain to get narrower at points
    * Start focusing more on Plants
        * Be able to place plants down on the ground
            * Be able to get lower/higher based on the terrain
        * Be able to pick plants back up
        * Be able to remove plants
        * Be able to sense that a plant area is where about to put another plant
            * Show red if this is the case
    * Be able to rotate the camera
    	* Should be able to rotate the camera 45 degrees
    * Terrain should not be a subclass of Mesh -- WILL NOT DO
        * Ground and Grid should be subclasses of Terrain and should be created
            from the terrain class -- WILL NOT DO
    * Look into adding tests

*/
var Environment = function(width, height) {
    var self = this;

    self.height = height;
    self.width = width;

    self.selected = null;
    self.previousSelected = null;

    self.objects = [];

    self.scene = new THREE.Scene();
    self.signals = signals;

    self.signals.addObject = new self.signals.Signal();
    self.signals.addObject.add(self.addObjToScene.bind(self));
    self.signals = signals;
}

Environment.prototype = {
    addObj: function(x, y) {
        // TODO: This is more of a temp function
        // Add cube
        var self = this;
        
        var obj = new Plant(self, x, y, 0);
        self.objects.push(obj);

        this.signals.addObject.dispatch( obj ); 
        self.selected = obj;

        return self.objects[0];
    },

    addObjToScene: function(obj) {
        var self = this;

        self.scene.add( obj.mesh );
    }
};
