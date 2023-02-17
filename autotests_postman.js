

pm.test("test json", function () {
    pm.response.to.have.jsonBody();
});

pm.test("Status 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status OK", function () {
    pm.response.to.have.status("OK");
});

pm.test("Test time 500", function () {
    pm.expect(pm.response.responseTime).to.be.below(500)
});

pm.test("Test Headers", function () {
    pm.response.to.be.header("Content-Type", "application/json; charset=UTF-8")
    pm.response.to.be.header("X-Frame-Options", "SAMEORIGIN")
    pm.response.to.be.header("Content-Length", "987")
});


pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("professional_roles");
});
