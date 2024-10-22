import {Project, ProjectChipType} from "./datatypes";


// Routes have to be edited in src/app/projects/projects.routes.ts
export const PROJECTS: Project[] = [
	{
		tag: "calculator",
		name: "Calculator",
		description: "A dead simple calculator. I heard everyone has to make one at some point.",
		image: "/projects/calculator.png",
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
				name: "Website",
				type: ProjectChipType.INTERFACE,
			},
		],
	},
	{
		tag: "p5js",
		name: "Varios p5.js Projects",
		description: "A collection of various projects using the p5.js library. Visualizations, little games, and more.",
		image: "/projects/collectionP5JS.png",
		chips: [
			{
				name: "JavaScript",
				type: ProjectChipType.LANGUAGE,
			},
			{
				name: "p5.js",
				type: ProjectChipType.TOOL,
			},
			{
				name: "Website",
				type: ProjectChipType.INTERFACE,
			},
		],
	},
	{
		tag: "telegram-bot",
		name: "Telegram Bot",
		description: "A Telegram bot to interact with some APIs. Kind of went out of Ideas, so there is not much functionality. I dont really use Telegram, its just easier to work with than WhatsApp.",
		image: "/projects/telegramBot.png",
		chips: [
			{
				name: "Go",
				type: ProjectChipType.LANGUAGE,
			},
			{
				name: "Telegram",
				type: ProjectChipType.USE_CASE,
			},
			{
				name: "API",
				type: ProjectChipType.TOOL,
			},
		],
	},
	{
		tag: "improved-potato",
		name: "Improved Potato Theme",
		description: "A theme for the note-taking app Obsidian. I just didnt like the default theme, and why configure a theme if you can just make your own?",
		image: "/projects/improvedPotato.png",
		chips: [
			{
				name: "CSS",
				type: ProjectChipType.LANGUAGE,
			},
			{
				name: "Obsidian",
				type: ProjectChipType.USE_CASE,
			},
			{
				name: "Theme",
				type: ProjectChipType.INTERFACE,
			},
		],
	},
	{
		tag: "pretty-print-dmeurer",
		name: "Pretty Print Dmeurer",
		description: "A Python library to make colored output in the terminal. I just wanted to make my terminal output look pretty.",
		image: "/projects/pretty_print_dmeurer.png",
		chips: [
			{
				name: "Python",
				type: ProjectChipType.LANGUAGE,
			},
			{
				name: "Library",
				type: ProjectChipType.INTERFACE,
			},
		],
	},
	{
		tag: "web-scraper-library",
		name: "Web Scraper Library",
		description: "A Python library to scrape websites. It is designed to scrape product catalogues and similar websites, and that with little to no coding knowledge required.",
		image: "/projects/web_scraper_lib.png",
		chips: [
			{
				name: "Python",
				type: ProjectChipType.LANGUAGE,
			},
			{
				name: "Library",
				type: ProjectChipType.INTERFACE,
			},
			{
				name: "Web-Scraping",
				type: ProjectChipType.USE_CASE,
			},
		],
	},
];


export const PROJECTS_P5JS: Project[] = [
	{
		tag: "qr-solver",
		name: "QR Riddle Solver",
		description: "Helper tool for soling a QR-Code based riddle.",
		image: "/projects/p5js/qr-solver.png",
	},
	{
		tag: "gift-wrapping",
		name: "Gift Wrapping Algorithm",
		description: "Implementation of the Gift Wrapping Algorithm.",
		image: "/projects/p5js/gift-wrapping.png",
	},
	{
		tag: "pong",
		name: "Pong",
		description: "A simple pong game.",
		image: "/projects/p5js/pong.png",
	},
	{
		tag: "snake",
		name: "Snake",
		description: "A simple snake game.",
		image: "/projects/p5js/snake.png",
	},
	{
		tag: "game-of-life",
		name: "Game of Life",
		description: "A visualization of Conway's Game of Life.",
		image: "/projects/p5js/game-of-life.png",
	},
];
