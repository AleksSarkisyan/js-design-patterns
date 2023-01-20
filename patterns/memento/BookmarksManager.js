

import Manager from './Manager.js';
import Browser from './Browser.js';

export default class BookmarksManager {
    constructor() {
        this.browser = new Browser();
        this.manager = new Manager();
    }

    saveBookmark(page) {
        let bookmark = this.browser.saveCurrentPage(page);
        this.manager.addBookmark(bookmark);
    }

    getFirstBookmark() {
        return this.manager.bookmarks[0].webpage;
    }

    getLastBookmark() {
        return this.manager.bookmarks[this.manager.bookmarks.length - 1].webpage;
    }

    getAllBookmarks() {
        return this.manager.bookmarks;
    }
}