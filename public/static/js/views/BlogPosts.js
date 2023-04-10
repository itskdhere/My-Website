import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Blog Posts");
    }

    async getHtml() {
        return `
            <h1>Blog Posts</h1>
            <p>You are viewing post #${this.postId}</p>
        `;
    }
}
