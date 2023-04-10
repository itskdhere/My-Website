import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Blog");
    }

    async getHtml() {
        return `
    <link rel="stylesheet" href="/static/css/blog.css">
    <header>
        <h3>Blog Posts</h3>
    </header>

    <main>
        Comming Soon ..
    </main>
        `;
    }
}