import { IAppState } from './../../../../core/store/state/app.state';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { RouterGo } from 'ngrx-router';
import { ActivatedRoute } from '@angular/router';
import { noop } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
  }


  author(): void {
    this.store.dispatch(new RouterGo({
      path: [`dashboard/post/breyner`],
    }))
  }
}
