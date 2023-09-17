describe("Login pmtool tests", () => {
  it("Header title is visible", () => {
    cy.visit("http://tredgate.com/pmtool");
    cy.get(".form-title").should("be.visible");
  });
});
