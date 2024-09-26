export class Article {
  constructor(
    public title: string,
    public author: string,
    public content: string,
    public image: string,
    public isPublished: boolean,
    public comment: string,
    public likes: number
  ) {}
}
