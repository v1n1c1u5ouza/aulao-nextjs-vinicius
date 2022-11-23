const BillingCycle = require("./billingCycle");

BillingCycle.method(["get", "post", "put", "delete"]);
BillingCycle.updateOptions({ new: true, runValidatos: true });

BillingCycle.route("get", (req, res, next) => {
  BillingCycle.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500).json({ errors: [error] });
    }
  });
});

module.exports = BillingCycle;
