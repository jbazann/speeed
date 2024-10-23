import sm from '/src/json/sm.json'
import logos from '/src/json/sm_icons.json'

export default () => ({
    btns: {
        linkedin,
        github,
        twitter
    }
});

const linkedin = {
    src: logos.white.linkedin,
    alt: 'LinkedIn icon',
    label: 'linkedin.com/in/jbazann/',
    link: sm.linkedin
}
const github = {
    src: logos.white.github,
    alt: 'GitHub icon.',
    label: 'github.com/jbazann',
    link: sm.github,
}
const twitter = {
    src: logos.white.x,
    alt: 'Twitter/X icon',
    label: 'Not yet.'
}
