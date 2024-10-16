import {Routes} from "@angular/router";
import {GiftWrappingComponent} from "./gift-wrapping/gift-wrapping.component";
import {P5jsComponent} from "./p5js.component";
import {PongComponent} from "./pong/pong.component";

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
	}
];
