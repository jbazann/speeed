export default () => ({
    getTemplateHTMLById
});

function getTemplateHTMLById(id) {
    return document.getElementById(id).content.cloneNode(true).firstElementChild.outerHTML;
}