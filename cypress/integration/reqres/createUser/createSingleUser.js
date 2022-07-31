import { Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
//import * as fs from 'fs'


When("I access api request end point to create user with {string} and {string}", (name, job) => {
    cy.request({method:'Post', url:`${Cypress.env('URL')}api/users/`, body:{
        name: name,
        job : job
    }
}).as('user')
})

Then("Verify reponse to be equal to sent request having {string} and {string}",  (name, job) => {

    cy.get('@user').should((response) => {
		expect(response.status).to.eq(201);
        assert.equal(response.body.name, name)
        assert.equal(response.body.job, job)
})
})

