import projects from "./projectsUtils";

export default () => ({data, navigate});

let data = {
    project: {},
    hasProject: false,
    pages: {
        index: true,
        projects: false,
        about: false,
        tpdan: false,
        speeed: false
    }
}

initialize();

function setPage(to) {
    data = navigate(to);
}

function navigate(next) {
    for(const page in data.pages) {
        data.pages[page] = false;
    }
    data.pages[next] = true;
    console.log('pushstate '+next)
    window.history.pushState({}, '', pathFor(next));
    return {...data}; // must be a new object because Alpine sucks (no deep-check for changes when re-assigning the same value)
}

function initialize() {
    const path = window.location.pathname.split('/');
    let handle = firstLevelPath;
    for (const str of path.values()) {
        if (str !== '') handle = handle(str);
    }
    handle();
}

function firstLevelPath(str) {
    switch(str) {
        case 'proyectos':
        case 'projects':
            return handler(projectsLevelPath,'/');
        case 'acerca':
        case 'about':
            return terminalHandler(handler(setPage,'about'));
        default:
            return terminalHandler(home);
    }
}

function projectsLevelPath(str) {
    let sanitized = '';
    switch (str) {
        case '/':
            setPage('projects');
            return terminalHandler(handler(setPage,'projects'));// this would never be called but wth
        case 'tpdan':
            sanitized = 'tpdan';
            break;
        case 'speeed':
            sanitized = 'speeed';
            break;
        default:
            return terminalHandler(home)
    }
    if (sanitized !== '/') {
        const _projects = projects().getProjects();
        data.project = _projects[sanitized];
        data.hasProject = data.project !== undefined;
    }
    return terminalHandler(handler(setPage, sanitized));
}

function handler(func, withParam) {
    return (param = withParam) => func(param);
}

function home() {
    data.pages = navigate()
}

function terminalHandler(func) {
    const forbiddenParam = 'secretSpicyStringXD'
    const callOnEmptyParam = ((typeof func === 'function') ? func : home);
    return (param = forbiddenParam) => {
        if (param === forbiddenParam) {
            callOnEmptyParam();
        } else {
            // if this function is called with a parameter, the handle loop continued unexpectedly. This contains its behavior
            return terminalHandler(home);
        }
    }
}

function pathFor(page) {
    switch (page) {
        case 'projects':
            return '/projects';
        case 'about':
            return '/about';
        case 'tpdan':
            return '/projects/tpdan'
        case 'speeed':
            return '/projects/speeed'
        default:
            return '/';
    }
}