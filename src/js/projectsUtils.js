export default () => ({
    getSections,
    fetchSections,
    getProjects,
    projectsPerRow
});

const loadedSections = {};
let manifest = await (await fetch("/projects/manifest.json")).json();

function getSections(project) {
    return {sections: loadedSections[project]};
}

function getProjects() {
    return manifest;
}

async function fetchSections(project) {
    const sections = {};
    for (const section of manifest[project].sections) {
        sections[section.key] = await (await fetch(section.path)).text();
    }
    loadedSections[project] = sections;
}

function projectsPerRow() {
    // let reminpx = parseFloat(getComputedStyle(document.documentElement).fontSize);
    // const remswide = 50
    // let ppr = Math.round(document.body.clientWidth / (remswide * reminpx));
    return 2;
}