import Alpine from 'alpinejs';
import imagesContent1 from './imagesContent1'
import content1 from './content1'
import templateUtils from './templateUtils'

window.Alpine = Alpine;
Alpine.data('content1',content1);
Alpine.data('imagesContent1',imagesContent1);
Alpine.data('templateUtils',templateUtils);
Alpine.start();