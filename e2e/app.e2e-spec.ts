import { RouterHomeWorkPage } from './app.po';

describe('router-home-work App', () => {
  let page: RouterHomeWorkPage;

  beforeEach(() => {
    page = new RouterHomeWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
