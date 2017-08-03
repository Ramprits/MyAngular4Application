import { MyAngular4ApplicationPage } from './app.po';

describe('my-angular4-application App', () => {
  let page: MyAngular4ApplicationPage;

  beforeEach(() => {
    page = new MyAngular4ApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to yo!');
  });
});
