async function generateProjectSection() {
	let projectSection = document.getElementById("project-section");
	
	let projects = await fetch('./projects.json')
		.then((response) => response.json())
	
	function generateProject(project) {
		let proj = document.createElement('div');
		proj.className = 'project-card';
		
		proj.appendChild(document.createElement('a'));
		proj.lastChild.href = project.pageRef;
		proj.lastChild.appendChild(document.createElement('img'));
		proj.lastChild.lastChild.src = project.titleImageRef;
		proj.lastChild.lastChild.className = 'project-logo';
		proj.appendChild(document.createElement('div'));
		proj.lastChild.className = 'project-text';
		proj.lastChild.innerHTML = project.title;
		proj.appendChild(document.createElement('a'));
		proj.lastChild.href = project.pageRef;
		proj.lastChild.className = 'project-button';
		proj.lastChild.innerHTML = 'View Project';
		
		return proj;
	}
	
	for (let i = 0; i < projects.length; i++) {
		let project = projects[i];
		if (!project.active) continue;
		if (!project.sliderActive) continue;
		projectSection.appendChild(generateProject(project));
	}
	
	return 0;
}

window.onload = function () {
	generateProjectSection().then(r => r === 0 ? console.log('Project section generated.') : console.log('Error generating project section.'));
}
