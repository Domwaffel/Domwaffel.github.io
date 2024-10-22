import {Component} from "@angular/core";

@Component({
	selector: "app-improved-potato",
	standalone: true,
	imports: [],
	templateUrl: "./improved-potato.component.html",
	styleUrl: "./improved-potato.component.scss",
})
export class ImprovedPotatoComponent {
	
	constructor() {
		window.location.href = "https://github.com/DMeurer/improved-potato";
	}
	
}
