function EnvironmentController(container_id) {
    var self = this;

    self.$containerEl = $('#'+container_id);
    
    var width = self.$containerEl.width() || 300;
    var height = self.$containerEl.height() || 200;

    self.environment = new Environment(width, height);

    self.viewport = new Viewport(self.environment, container_id)

    self.sideBar = new SideBar(self.$containerEl, self.environment);
    self.sideBar.addButtons();
}
