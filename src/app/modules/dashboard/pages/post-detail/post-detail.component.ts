import { selectPost } from './../../../../core/store/selectors/post.selectors';
import { IAppState } from './../../../../core/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RouterBack } from 'ngrx-router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  author$ = this.store.pipe(select(selectPost));
  
  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void { 
  }

  goBack(): void {
    this.store.dispatch(new RouterBack());
  }

}
