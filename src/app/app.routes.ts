import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
	{
		path: "home",
		component: HomeComponent,
	},
	{
		path: "projects",
		loadChildren: () => import("./projects/projects.routes").then((m) => m.routes),
	},
];
