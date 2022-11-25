import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Dashboard from "../dashboard/dashboard";
import BillingCycles from "../billingCycles/billingCycles";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard} />
    <Route path="/billingcycles" component={BillingCycles} />
    <Redirect from="*" to="/" />
  </Router>
);
