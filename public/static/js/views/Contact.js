import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
    <header>
        <h3>Contact Me</h3>
    </header>

    <main>
        Comming Soon ..
    </main>
        `;
    }
}