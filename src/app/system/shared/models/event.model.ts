export class AVEvent {
  constructor(
    public type: string,
    public amount: number,
    public category: number,
    public date: string,
    public description: string,
    public id?: string
  ) {}
}
