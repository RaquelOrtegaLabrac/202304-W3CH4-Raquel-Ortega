export type ShowFeatures = {
  id: string;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
};

export class Show implements ShowFeatures {
  watched: boolean;
  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public score: number,
    public emmies: number
  ) {
    this.watched = false;
  }
}
