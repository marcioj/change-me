import { loadApp } from '../../helpers/load-app';

describe('MainCtrl', function() {
  beforeEach(loadApp());

  it('displays a message', inject(function($controller) {
    let controller = $controller('MainCtrl', {});

    expect(controller.message).toBe('Hello world');
  }));
});
