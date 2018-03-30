import { Injectable } from '@angular/core';
import { environment} from './../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable'

@Injectable()
export class FetchQuestionService {

  constructor(private _http: HttpClient) { }

  fetchQuestions(category: string, subCategory: string): Observable<any> {
    const fetchAllQuestionEndPoint = `${environment.baseurl}/question/all`;
    if(category !== '' && subCategory !== '') {
      const postData = {
        "category": category,
        "subCategory": subCategory
      }
      return this._http.post(fetchAllQuestionEndPoint, postData);
    } 
  } 

}
