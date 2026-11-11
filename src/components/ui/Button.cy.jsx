import Button from './Button.jsx';

describe('<Button />', () => {
  it('викликає onClick при натисканні', () => {
    const onClick = cy.stub().as('click');
    cy.mount(<Button onClick={onClick}>Увійти</Button>);
    cy.contains('button', 'Увійти').click();
    cy.get('@click').should('have.been.calledOnce');
  });

  it('має стиль outline', () => {
    cy.mount(<Button variant="outline">Скасувати</Button>);
    cy.get('button').should('have.class', 'btn').and('have.class', 'o');
  });
});
