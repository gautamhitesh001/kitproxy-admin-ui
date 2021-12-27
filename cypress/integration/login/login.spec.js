describe("Login Page load and redirects", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/login");
	});

	it("check login page render", () => {
		cy.get("#headingText").should("have.text", "Welcome Back!");
	});

	it("check redirect to signup", () => {
		cy.get("#signupRedirect").click();
		cy.location().should((loc) => {
			expect(loc.pathname).to.eq("/register");
		});
		cy.get("#headingText").should("have.text", "Start your free Trail now");
	});

	it("check redirect to forgot password", () => {
		cy.get("#forgotPasswordRedirect").click();
		cy.location().should((loc) => {
			expect(loc.pathname).to.eq("/reset-password/email-verification");
		});
		cy.get("#headingText").should("have.text", "Reset Password");
	});
});

describe("login Page form", () => {

	beforeEach(() => {
		cy.visit("http://localhost:3000/login");
	});

	it("email field exist", () => {
		cy.get("#email").should("be.visible")
	});

	it("empty email", () => {
		cy.get("#email").clear().blur();
		cy.get("#email-helper-text").should("be.visible")
		cy.get("#email-helper-text").should("have.class", "Mui-error")
		cy.get("#email-helper-text").should("have.text", "Please enter email.")
	})

	it("invalid email", () => {
		cy.get("#email").type("test").blur();
		cy.get("#email-helper-text").should("be.visible")
		cy.get("#email-helper-text").should("have.class", "Mui-error")
		cy.get("#email-helper-text").should("have.text", "Please enter a valid email.")
	})

	it("valid email", () => {
		cy.get("#email").type("test@test.com").blur();
		cy.get("#email-helper-text").should("not.exist")
	})

	it("empty password", () => {
		cy.get("#password").clear().blur();
		cy.get("#password-helper-text").should("be.visible")
		cy.get("#password-helper-text").should("have.class", "Mui-error")
		cy.get("#password-helper-text").should("have.text", "Please enter password.")
	})

	it("valid password", () => {
		cy.get("#password").type("test@test.com").blur();
		cy.get("#password-helper-text").should("not.exist")
	})

	it("empty form", () => {
		cy.get("#loginSubmit").click();
		cy.get("#password-helper-text").should("be.visible")
		cy.get("#password-helper-text").should("have.class", "Mui-error")
		cy.get("#password-helper-text").should("have.text", "Please enter password.")
		cy.get("#email-helper-text").should("be.visible")
		cy.get("#email-helper-text").should("have.class", "Mui-error")
		cy.get("#email-helper-text").should("have.text", "Please enter email.")
	})

});
