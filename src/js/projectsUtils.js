export default () => ({
    getSections,
    fetchSections,
    getProjects
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
        sections[section.key] = await (await fetch(section.path)).text() ;
    }
    loadedSections[project] = sections;
}
