import "./footdescription.js";
class FootElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="custom-element">
            <h1>Ini adalam custom elemen</h1>
        </div>
        `
        const footdes = document.createElement("foot-description");
        this.appendChild(footdes);
    }
}
customElements.define("foot-element", FootElement);
