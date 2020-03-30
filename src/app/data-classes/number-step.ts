import {Step} from './step';

export class NumberStep implements Step {
  constructor(title: string, type: string) {
    this.Title = title;
    this.Type = type;
    this.Value = 0;
  }
  public Title: string;
  public Type: string;
  public Value: number;
}
