class FootDescription extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="custom-element">
      <p>Ini juga custom element</p>
    </div>
    `;
  }
}
customElements.define("foot-description", FootDescription);
