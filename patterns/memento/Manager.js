export default class Manager {
    constructor() {
        this.bookmarks = [];
    }

    addBookmark(bookmark) {
        let exists = this.bookmarkExists(bookmark);

        if (exists) {
            console.error(`${bookmark.webpage} already exists`);
            return;
        }

        if (!bookmark.webpage) {
            console.error('Not a valid link');
            return;
        }

        this.bookmarks.push(bookmark);
    }

    bookmarkExists(page) {
        return this.bookmarks.find((bookmark) => {
            return bookmark.webpage == page.webpage;
        })
    }
};