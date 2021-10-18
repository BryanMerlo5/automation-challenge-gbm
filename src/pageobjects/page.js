/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    openWebsite (type, page) {
        const url = (type === 'url') ? page : browser.options.baseUrl + page;
        return browser.url(url)
    }
}
