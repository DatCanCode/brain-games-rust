import { html, render } from "https://unpkg.com/lit-html?module";

export class Board extends HTMLElement {
  board;

  set board_state(board_state) {
    this.board = board_state
      .split("")
      .map((space) => space.trim())
      .filter((space) => !!space);

    this.render();
  }

  template() {
    return html`
      ${this.board.map((space, i) => {
        const render = [];

        if (i > 0 && i % 3 === 0) {
          render.push(html`<br />`);
        }

        render.push(html`<button data-index=${i}>${space}</button>`);

        return render;
      })}
    `;
  }

  render() {
    render(this.template(), this);
  }
}

customElements.define("xo-board", Board);
