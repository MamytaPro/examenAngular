import { Commentaire } from './Commentaire.models';
export class Publication {

  constructor(
    private _pseudo: string,
    private _titre: string,
    private _date: Date,
    private _description: string,
    private _localisation: string,
    private _nbLike: number,
    private _comment: Commentaire[],
    private _imageUrl: string
  ) {

  }
  public get comment(): Commentaire[] {
    return this._comment;
  }
  public set comment(value: Commentaire[]) {
    this._comment = value;
  }
  public get nbLike(): number {
    return this._nbLike;
  }
  public set nbLike(value: number) {
    this._nbLike = value;
  }
  public get localisation(): string {
    return this._localisation;
  }
  public set localisation(value: string) {
    this._localisation = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get date(): Date {
    return this._date;
  }
  public set date(value: Date) {
    this._date = value;
  }
  public get titre(): string {
    return this._titre;
  }
  public set titre(value: string) {
    this._titre = value;
  }
  public get pseudo(): string {
    return this._pseudo;
  }
  public set pseudo(value: string) {
    this._pseudo = value;
  }
  public get imageUrl(): string {
    return this._imageUrl;
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
}

