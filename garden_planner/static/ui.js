var SideBar = function($containerEl, environment) {
    var self = this;

    self.$containerEl = $containerEl;
    self.environment = environment;
}

SideBar.prototype = {
    addObjButton: function() {
        var self = this;

        var buttons = document.createElement( "div" );
        buttons.innerHTML = '<button id="nice" style="position:absolute;top:100px;left:300px;">Add</button>';

        self.$containerEl.append(buttons);

        buttonEl = document.getElementById('nice');
        buttonEl.addEventListener( 'click', function() {
            self.environment.addObj((Math.random()-.5)*10, (Math.random()-.5)*5);
        }, false);
    },
    
    addMoveLeftButton: function() {
        var self = this;

        var buttons = document.createElement( "div" );
        buttons.innerHTML = '<button id="left" style="position:absolute;top:120px;left:300px;"><-</button>';

        self.$containerEl.append(buttons);

        buttonEl = document.getElementById('left');
        buttonEl.addEventListener( 'click', function() {
            var selected = self.environment.selected;
            
            if(selected !== null) {
                self.environment.selected.moveRelative(-.25, 0, 0);
            }
        }, false);
    },

    addButtons: function() {
        var self = this;

        self.addObjButton();
        self.addMoveLeftButton();
    }
}
