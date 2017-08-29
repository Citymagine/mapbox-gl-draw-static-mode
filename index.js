(function (root, factory) {
  if ( typeof define === 'function' && define.amd ) {
    define('MapboxDrawStaticMode', factory(root));
  } else if ( typeof exports === 'object' ) {
    module.exports = factory(root);
  } else {
    root.MapboxDrawStaticMode = factory(root);
  }
})(window || this, function (root) {
  return {
    onSetup: function() {
      this.setActionableState();
      return {};
    },
    toDisplayFeatures: function(state, geojson, display) {
      display(geojson);
    }
  }
});
