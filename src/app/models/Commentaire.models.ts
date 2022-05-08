export class Commentaire{
    constructor(
    private _pseudo: string,
    private _nbreLike: number,
    private _contenu: string
  ) {}
    public get contenu(): string {
      return this._contenu;
    }
    public set contenu(value: string) {
      this._contenu = value;
    }
    public get nbreLike(): number {
      return this._nbreLike;
    }
    public set nbreLike(value: number) {
      this._nbreLike = value;
    }
    public get pseudo(): string {
      return this._pseudo;
    }
    public set pseudo(value: string) {
      this._pseudo = value;
    }
}
