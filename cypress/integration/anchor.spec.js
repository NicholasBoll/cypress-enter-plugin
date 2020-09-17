describe("plugin", () => {
  beforeEach(() => {
    cy.visit("cypress/fixtures/index.html");
  });

  it("should trigger the click action when typing {enter}", () => {
    cy.get("a").focus().type("{enter}");
    cy.get("output").should("contain", "Anchor clicked!");
  });
});
