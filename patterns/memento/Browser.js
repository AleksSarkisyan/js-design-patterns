export default class Browser {
    constructor() {
        this.currentPage = null;
    }
    saveCurrentPage(page) {
        this.currentPage = page;

        return {
            webpage: this.currentPage
        }
    }
};