import {Project, ProjectChipType} from "./datatypes";


// Routes have to be edited in src/app/projects/projects.routes.ts
export const PROJECTS: [Project] = [
	{
		tag: "qr-solver",
		name: "QR Riddle Solver",
		description: "Helper tool for soling a QR-Code based riddle.",
		image: "/qr-solver.png",
		chips: [
			{
				name: "HTML",
				type: ProjectChipType.LANGUAGE,
			},
			{
				name: "CSS",
				type: ProjectChipType.LANGUAGE,
			},
			{
				name: "JavaScript",
				type: ProjectChipType.LANGUAGE,
			},
			{
				name: "Geocaching",
				type: ProjectChipType.USE_CASE,
			},
			{
				name: "Website",
				type: ProjectChipType.INTERFACE,
			},
		],
	},
];
