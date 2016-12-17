import { CrudangularPage } from './app.po';

describe('crudangular App', function() {
  let page: CrudangularPage;

  beforeEach(() => {
    page = new CrudangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
