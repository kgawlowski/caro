import { CaroPage } from './app.po';

describe('caro App', () => {
  let page: CaroPage;

  beforeEach(() => {
    page = new CaroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
