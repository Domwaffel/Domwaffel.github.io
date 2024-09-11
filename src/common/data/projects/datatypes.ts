export interface Project {
	tag: string;
	name: string;
	description: string;
	image?: string;
	chips?: ProjectChips[];
}

export interface ProjectChips {
	name: string;
	type: ProjectChipType;
	icon?: string;
}

export enum ProjectChipType {
	LANGUAGE = "language",
	TOOL = "tool",
	USE_CASE = "use-case",
	INTERFACE = "interface",
}
