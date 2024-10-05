import Alpine from 'alpinejs';
import content1 from './content1'
import templateUtils from './templateUtils'

window.Alpine = Alpine;
Alpine.data('content1',content1);
Alpine.data('templateUtils',templateUtils);
Alpine.start();