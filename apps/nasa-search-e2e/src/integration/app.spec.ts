import { getHeading } from '../support/app.po';

describe('nasa-search', () => {
  beforeEach(() => cy.visit('/'));

  it('displays app title', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getHeading().contains('NASA Search');
  });
});
