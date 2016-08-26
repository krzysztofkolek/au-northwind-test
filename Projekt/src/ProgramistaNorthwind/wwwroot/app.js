export class App {
    constructor() {
        this.message = "Welcome to Aurelia!";
    }

    configureRouter(config, router) {
        this.router = router;

        config.map([
			{ route:["", "home"], moduleId:"src/Views/home", title:"Home", nav:true, name:"home"},
            { route:"employees", moduleId:"src/Views/employees/index", title:"Employees", nav:true},
			{ route: "employeesdetails/:id", moduleId: "src/Views/employees/details", title: "Employees details", nav:false, name: "employeesdetails"},
        ]);
    }
}