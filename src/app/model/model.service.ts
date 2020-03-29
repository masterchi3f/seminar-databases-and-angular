import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  steps: string[][];
  inputs: any[];
  navName: string;

  constructor() { }
}
