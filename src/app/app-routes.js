import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import { loginRoutes } from "./login";
import {dashboardRoutes} from "./dashboard";

const routes = [
    ...loginRoutes ,
    ...dashboardRoutes
]

export default new Router({
    mode: "history",
    routes
});