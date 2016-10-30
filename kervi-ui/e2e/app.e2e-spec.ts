import { KerviUiPage } from './app.po';

describe('kervi-ui App', function() {
  let page: KerviUiPage;

  beforeEach(() => {
    page = new KerviUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
