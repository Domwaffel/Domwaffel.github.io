import {Routes} from "@angular/router";
import {ProjectsComponent} from "./projects.component";
import {QrSolverComponent} from "./qr-solver/qr-solver.component";

export const routes: Routes = [
	{
		pathMatch: "full",
		path: "",
		component: ProjectsComponent,
	},
	{
		path: "qr-solver",
		component: QrSolverComponent,
	},
];
