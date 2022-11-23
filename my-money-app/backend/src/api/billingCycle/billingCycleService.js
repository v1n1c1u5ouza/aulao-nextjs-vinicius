const BillingCycle = require("./billingCycle");

BillingCycle.method(["get", "post", "put", "delete"]);
BillingCycle.updateOptions({ new: true, runValidatos: true });

module.exports = BillingCycle;