describe("sign in", () => {
  it("signs in to the website", () => {
    cy.visit("http://localhost:3000");
    cy.get(".accountLogo").click();
    cy.get("#email").type("user@gmail.com");
    cy.get("#password").type("password!");
    cy.get(".signInBtn").click();
    cy.get(".myInfo").click();
    cy.get(".aboutLink").click();
  });
});
