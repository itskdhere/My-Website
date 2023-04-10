import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Blog Posts");
    }

    async getHtml() {
        return `
    <link rel="stylesheet" href="/static/css/blog.css">
    <header>
        <h3>Blog Posts</h3>
        <p>You are viewing post #${this.postId}</p>
    </header>

    <main>
        Comming Soon ..
    </main>
        `;
    }
}
