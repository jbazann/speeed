export default () => ({pages,navigate});

let pages = {
    index: true,
    projects: false,
    about: false
}

function navigate(next) {
    for(const page in pages) {
        pages[page] = false;
    }
    pages[next] = true;
    window.history.pushState({}, '', pathFor(next))
    return {...pages}; // must be a new object because Alpine sucks
}

function initialize() {
    const path = window.location.pathname.split('/');
    let handle = firstLevelPath;
    for (const str of path.values()) {
        if (str !== '') handle = handle(str);
    }
    handle();
}

function setPage(to) {
    pages = navigate(to);
}

function firstLevelPath(str) {
    switch(str) {
        case 'proyectos':
        case 'projects':
            return orGoHome(wrap(setPage,'projects'));
        case 'acerca':
        case 'about':
            return orGoHome(wrap(setPage,'about'));
        default:
            return orGoHome(wrap(setPage,'index'));
    }
}

function wrap(func, withParam) {
    return () => func(withParam);
}

function home() {
    pages = navigate()
}

function orGoHome(func) {
    const forbiddenParam = 'secretSpicyStringXD'
    const sanitized = ((typeof func === 'function') ? func : home);
    return (entry = forbiddenParam) => {
        if (entry === forbiddenParam) {
            sanitized();
        } else {
            return orGoHome(home);
        }
    }
}

function pathFor(page) {
    switch (page) {
        case 'projects':
            return '/projects';
        case 'about':
            return '/about';
        default:
            return '/';
    }
}

initialize();