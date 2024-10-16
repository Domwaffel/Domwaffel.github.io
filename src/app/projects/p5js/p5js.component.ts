import {NgForOf} from "@angular/common";
import {Component} from "@angular/core";
import {ProjectCardComponent} from "../../../common/components/project-card/project-card.component";
import {PROJECTS, PROJECTS_P5JS} from "../../../common/data/projects/projects";

@Component({
	selector: "app-p5js",
	standalone: true,
	imports: [
		NgForOf,
		ProjectCardComponent,
	],
	templateUrl: "./p5js.component.html",
	styleUrl: "./p5js.component.scss",
})
export class P5jsComponent {
	protected readonly PROJECTS_P5JS = PROJECTS_P5JS;
}
