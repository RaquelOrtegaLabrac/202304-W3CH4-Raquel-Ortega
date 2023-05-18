import { Show } from "../models/show";
import { Component } from "./component";


export class ShowsList extends Component {
  shows: Show[];
  constructor(selector:string){
    super(selector);
    this.shows = getShows();
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
      (item) =>
    )
  }


}
