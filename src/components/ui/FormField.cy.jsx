import FormField from './FormField.jsx';

describe('<FormField />', () => {
  it("пов'язує підпис із полем вводу", () => {
    cy.mount(<FormField id="email" label="Пошта" type="email" />);
    cy.contains('label', 'Пошта').click();
    cy.focused().should('have.attr', 'id', 'email');
  });

  it('рендерить select', () => {
    cy.mount(
      <FormField id="group" label="Група" as="select">
        <option>ІПЗ-1</option>
      </FormField>,
    );
    cy.get('select#group').should('contain', 'ІПЗ-1');
  });
});
