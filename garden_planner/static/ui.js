var SideBar = function($containerEl, environment) {
    var self = this;

    self.$containerEl = $containerEl;
    self.environment = environment;
}

SideBar.prototype = {
    addObjButton: function() {
        var self = this;

        var buttons = document.createElement( "div" );
        buttons.innerHTML = '<button id="nice" style="position:absolute;top:100px;left:300px;">Cool</button>';

        self.$containerEl.append(buttons);

        buttonEl = document.getElementById('nice');
        buttonEl.addEventListener( 'click', function() {
            self.environment.addObj((Math.random()-.5)*10, (Math.random()-.5)*5);
        }, false);
    },

    addButtons: function() {
        var self = this;

        self.addObjButton();
    }
}
