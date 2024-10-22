import {Routes} from "@angular/router";
import {GameOfLifeComponent} from "./game-of-life/game-of-life.component";
import {GiftWrappingComponent} from "./gift-wrapping/gift-wrapping.component";
import {P5jsComponent} from "./p5js.component";
import {PongComponent} from "./pong/pong.component";
import {QrSolverComponent} from "./qr-solver/qr-solver.component";
import {SnakeComponent} from "./snake/snake.component";

export const routes: Routes = [
	{
		pathMatch: "full",
		path: "",
		component: P5jsComponent,
	},
	{
		path: "gift-wrapping",
		component: GiftWrappingComponent,
	},
	{
		path: "pong",
		component: PongComponent,
	},
	{
		path: "qr-solver",
		component: QrSolverComponent,
	},
	{
		path: "game-of-life",
		component: GameOfLifeComponent,
	},
	{
		path: "snake",
		component: SnakeComponent,
	}
];
