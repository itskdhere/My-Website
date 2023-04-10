import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Apps");
    }

    async getHtml() {
        return `
            <h1>Apps</h1>
        `;
    }
}