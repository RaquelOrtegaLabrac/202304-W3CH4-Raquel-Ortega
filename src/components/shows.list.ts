import { type Show } from '../models/show';
import { Component } from './component';

export class ShowsList extends Component {
  shows: Show[];
  constructor(selector: string) {
    super(selector);
    this.shows = console.log(this.shows);
    this.render();
    console.log(this.element);
  }

  render(): void {
    super.cleanHtml();
    this.template = this.createTemplate();
    super.render();
  }

  createTemplate() {
    const list = this.shows
      .map(
        (item) => `
            <li class="serie">
              <img class="serie__poster"
                src="${item.poster}"
                alt="The Sopranos poster" />
              <h4 class="serie__title">The Sopranos</h4>
              <p class="serie__info">David Chase (1999)</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete"></i>
            </li>
      `
      )
      .join('');

    return `
          <ul class="series-list">
          ${list}
          </ul>
    `;
  }
}
