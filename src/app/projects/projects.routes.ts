import {Routes} from "@angular/router";
import {CalculatorComponent} from "./calculator/calculator.component";
import {ImprovedPotatoComponent} from "./improved-potato/improved-potato.component";
import {ProjectsComponent} from "./projects.component";
import {QrSolverComponent} from "./qr-solver/qr-solver.component";
import {TelegramBotComponent} from "./telegram-bot/telegram-bot.component";

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
	{
		path: "calculator",
		component: CalculatorComponent,
	},
	{
		path: "p5js",
		loadChildren: () => import("./p5js/p5js.routes").then((m) => m.routes),
	},
	{
		path: "telegram-bot",
		component: TelegramBotComponent,
	},
	{
		path: "improved-potato",
		component: ImprovedPotatoComponent,
	},
];
