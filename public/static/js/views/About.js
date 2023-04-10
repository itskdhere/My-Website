import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHtml() {
        return `
    <header>
        <h3>About Me</h3>
    </header>

    <main>
        Comming Soon ..
    </main>
        `;
    }
}