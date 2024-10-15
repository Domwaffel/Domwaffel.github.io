import {NgForOf} from "@angular/common";
import {Component} from "@angular/core";
import {ProjectCardComponent} from "../../common/components/project-card/project-card.component";
import {PROJECTS} from "../../common/data/projects/projects";

@Component({
	selector: "app-projects",
	standalone: true,
	imports: [
		NgForOf,
		ProjectCardComponent,
	],
	templateUrl: "./projects.component.html",
	styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
	protected readonly PROJECTS = PROJECTS;
}
