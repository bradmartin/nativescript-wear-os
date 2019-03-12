describe('imagefilters class', function() {
  it('can be instantiated', function() {
    var testListView;
    var WearOsListView = require('nativescript-wear-os/packages/listview')
      .WearOsListView;
    if (WearOsListView) {
      testListView = new WearOsListView();
      console.log('WearOsListView instance: ' + testListView);
    }

    expect(function() {
      return new WearOsListView();
    }).not.toThrow();

    expect(new WearOsListView()).toBeDefined();
  });
});
