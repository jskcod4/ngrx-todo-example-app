/// <reference types="cypress" />

describe('example to-do-ngrx-app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('displays empty message by default', () => {
    cy.contains(
      'No existen tareas agregadas. Por qué no intentas añadir una nueva tarea ?'
    );
  });

  it('can add new task', () => {
    cy.get('input[type="text"]').type('My new task');
    cy.get('button').click();
    cy.contains('Se ha agregado la tarea: My new task');
  });

  it('cant remove a task', () => {
    cy.get('input[type="text"]').type('My new task');
    cy.get('button').click();
    cy.get('.item a').last().click();
    cy.contains('My new task').not();
  });
});
