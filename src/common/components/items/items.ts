export interface NavItem {
	name: string;
	summary: string;
}

const ABOUT = "about";
const PROJECTS = "projects";

export const SECTIONS: { [key: string]: NavItem } = {
	[PROJECTS]: {
		name: "Projects",
		summary: "Some of the projects I've worked on.",
	},
	/*
	[ABOUT]: {
		name: "About",
		summary: "A little bit about me.",
	},
	*/
};
