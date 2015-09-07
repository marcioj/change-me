describe('Homepage', function() {
  it('displays the message', function() {
    browser.get('http://localhost:4200');

    expect($('h1').getText()).toEqual('Hello world');
  });
});
