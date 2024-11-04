import Alpine from 'alpinejs';
import imagesContent1 from './imagesContent1'
import content1 from './content1'
import utils from './utils'
import socialButtons1 from './socialButtons1'
import projectsUtils from './projectsUtils'
import navigation from './navigation'

for(const project in projectsUtils().getProjects()) {
    await projectsUtils().fetchSections(project);
}

const global = {
    ...utils(),
    ...navigation()
}
console.log(global)
window.Alpine = Alpine;

Alpine.data('global',() => (global));

Alpine.data('utils',utils)

Alpine.data('projectsUtils', projectsUtils);
Alpine.data('content1',content1);
Alpine.data('imagesContent1',imagesContent1);
Alpine.data('socialButtons1',socialButtons1);
Alpine.start();