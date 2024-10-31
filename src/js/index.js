import Alpine from 'alpinejs';
import imagesContent1 from './imagesContent1'
import content1 from './content1'
import utils from './utils'
import socialButtons1 from './socialButtons1'
import projectsUtils from './projectsUtils'

for(const project in projectsUtils().getProjects()) {
    await projectsUtils().fetchSections(project);
}

window.Alpine = Alpine;
Alpine.data('projectsUtils', projectsUtils);
Alpine.data('content1',content1);
Alpine.data('imagesContent1',imagesContent1);
Alpine.data('utils',utils);
Alpine.data('socialButtons1',socialButtons1);
Alpine.start();