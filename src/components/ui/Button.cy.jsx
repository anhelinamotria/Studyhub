import { MemoryRouter } from 'react-router-dom';
import Button from './Button.jsx';

describe('<Button />', () => {
  it('викликає onClick при натисканні', () => {
    const onClick = cy.stub().as('click');
    cy.mount(<Button onClick={onClick}>Увійти</Button>);
    cy.contains('button', 'Увійти').click();
    cy.get('@click').should('have.been.calledOnce');
  });

  it('має варіант outline', () => {
    cy.mount(<Button variant="outline">Скасувати</Button>);
    cy.get('button').should('have.attr', 'data-variant', 'outline');
  });

  it('рендериться як посилання, якщо передано to', () => {
    cy.mount(
      <MemoryRouter>
        <Button to="/register">Реєстрація</Button>
      </MemoryRouter>,
    );
    cy.contains('a', 'Реєстрація').should('have.attr', 'href', '/register');
  });
});
