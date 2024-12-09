export default () => ({data, navigate, initialize, back});

function navigate(next) {
    transitions.doAction(data.pageStack.at(-1), next, data);
    pushPath();
    return {...data}; // must be a new object because Alpine sucks (no deep-check for changes when re-assigning the same value)
}

function back() {
    if( data.pageStack.length <= 1 ) return {...data};
    transitions.doAction(data.pageStack.at(-1), data.pageStack.at(-2), data);
    pushPath();
    return {...data};
}

function pushPath() {
    let fullPath = '/';
    for (const page of data.pageStack) {
        if (page !== 'index') fullPath += page + '/';
    }
    window.history.pushState({}, '', fullPath);
}

function initialize() {
    let path = window.location.pathname.split('/').reverse();
    let data = new NavigationData();
    if(path.length < 1) return data;
    path.pop(); // rm empty string caused by split operation
    let from = path.pop();
    transitions.doAction('index',from,data);
    for (const to of path.values()) {
        transitions.doAction(from, to, data);
        from = to;
    }
    return data;
}

class Transitions {
    constructor() {
        this.map = new Map();
        this.add(new PathTransition("index", "projects", (data) => {data.to('projects')}))
            .add(new PathTransition("index", "about", (data) => {data.to('about')}))
            .add(new PathTransition("about", "index", (data) => {data.to('index')}))
            .add(new PathTransition("projects", "index", (data) => {data.to('index')}))
            .add(new PathTransition("projects", "tpdan", (data) => {data.to('tpdan')}))
            .add(new PathTransition("projects", "speeed", (data) => {data.to('speeed')}))
            .add(new PathTransition("tpdan", "index", (data) => {data.to('index')}))
            .add(new PathTransition("tpdan", "projects", (data) => {data.to('projects')}))
            .add(new PathTransition("speeed", "index", (data) => {data.to('index')}))
            .add(new PathTransition("speeed", "projects", (data) => {data.to('projects')}));
    }

    add(transition) {
        let found = this.map.get(transition.from);
        if ( found === undefined ) found = [];
        found.push(transition);
        this.map.set(transition.from, found);
        return this;
    }

    doAction(from, to, data) {
        const transitions = this.map.get(from);
        for (const transition of transitions) {
            if(transition.to === redirects.apply(to)) return transition.action(data);
        }
        console.log("Action from: "+from+", to: "+to+" not found.");
    }
}

class PathTransition {
    constructor(from,to,action) {
        this.from = from;
        this.to = to;
        this.action = action;
    }
}

class Redirects {
    constructor() {
        this.map = new Map();
        this.add("proyectos", "projects")
            .add("acerca", "about")
            .add("sobremi", "about");
    }

    add(from, to) {
        this.map.set(from, to);
        return this;
    }

    apply(path) {
        if(this.map.has(path)) return this.map.get(path);
        return path;
    }
}

class NavigationData {
    constructor() {
        this.project = {};
        this.hasProject = false;
        this.pages = {
            index: true,
            projects: false,
            about: false,
            tpdan: false,
            speeed: false
        };
        this.pageStack = ['index'];
    }

    to(next) {
        if( this.pageStack.length > 1 && redirects.apply(this.pageStack.at(-2)) === redirects.apply(next) ) {
            this.pageStack.pop();
            next = this.pageStack.pop();// Pop twice because of push down below. Use popped value to avoid overwriting with redirects.
        }
        for (const page in this.pages) {
            if (this.pages[page]) {
                this.pages[page] = false;
            }
        }
        this.pageStack.push(next);
        this.pages[redirects.apply(next)] = true;
    }
}

const transitions = new Transitions();
const redirects = new Redirects();
let data = initialize();