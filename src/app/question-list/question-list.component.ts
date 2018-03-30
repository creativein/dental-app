import { Component, OnInit } from '@angular/core';
import { FetchQuestionService } from './../../app/fetch-question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  constructor(private _fetchQuestionService: FetchQuestionService) { }

  ngOnInit() {
    this._fetchQuestionService.fetchQuestions('', '');
  }

}
