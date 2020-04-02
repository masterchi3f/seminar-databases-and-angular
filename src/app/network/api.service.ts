import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  async getData(url: string): Promise<Result> {
    return this.http.get<Result>(url).toPromise();
  }

}

interface Result {
  Time: string;
  Result: any;
}
