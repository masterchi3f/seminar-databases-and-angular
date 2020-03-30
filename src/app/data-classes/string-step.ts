import {Step} from './step';

export class StringStep implements Step {

  constructor(title: string, type: string) {
    this.Title = title;
    this.Type = type;
    this.Value = '';
  }
  public Title: string;
  public Type: string;
  public Value: string;
}
