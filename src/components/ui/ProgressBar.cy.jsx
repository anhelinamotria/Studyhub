import ProgressBar from './ProgressBar.jsx';

describe('<ProgressBar />', () => {
  it('обмежує значення діапазоном 0–100', () => {
    cy.mount(<ProgressBar value={150} />);
    cy.get('[role=progressbar]').should('have.attr', 'aria-valuenow', '100');
  });
});
