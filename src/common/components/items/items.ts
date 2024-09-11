export interface NavItem {
	name: string;
	summary: string;
}

const PROJECTS = "projects";
const ABOUT = "about";

export const SECTIONS: { [key: string]: NavItem } = {
	[ABOUT]: {
		name: "Projects",
		summary: "Some of the projects I've worked on.",
	},
	[PROJECTS]: {
		name: "About",
		summary: "A little bit about me.",
	},
};
