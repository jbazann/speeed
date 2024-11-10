export default () => ({
    getProjects
});

let manifest = await (await fetch("/projects/manifest.json")).json();

function getProjects() {
    return manifest;
}
