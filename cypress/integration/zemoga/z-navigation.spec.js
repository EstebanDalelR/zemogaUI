describe("Opens the page", ()=>{
  let baseURL = 'http://localhost:3000'
  it("Uses the app logging in with a preset account", ()=>{
    cy.visit(baseURL)
    /* Set server and fixtures, as to respond with the people to vote */
    cy.server()
    cy.fixture('people.json').as('peopleJSON')
    cy.route("GET", '/api/db', '@peopleJSON').as("getPeople")

    cy.contains("Login").click() 
    cy.url().should("include", "/login")
    cy.get("#name").type("alguien")
    cy.get("#password").type("dasda")
    cy.get("#submit").click()
    cy.visit(baseURL)
    cy.wait(500)
    cy.get(".voteNegative").first().click()
    cy.get(".castVote").first().click()
    cy.contains("Vote again") 
  }) 
  it("Tries to use the app without logging in", ()=>{
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.visit(baseURL)
    /* Set server and fixtures, as to respond with the people to vote */
    cy.server()
    cy.fixture('people.json').as('peopleJSON')
    cy.route("GET", '/api/db', '@peopleJSON').as("getPeople")
    cy.wait(500)
    cy.get(".voteNegative").first().click()
    cy.get(".castVote").first().click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith('You must be logged in to Vote')
    })
  })
})