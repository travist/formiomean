import { MeanappPage } from './app.po';

describe('meanapp App', () => {
  let page: MeanappPage;

  beforeEach(() => {
    page = new MeanappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
