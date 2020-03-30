import { IPost } from './../../shared/models/post/post.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  /*
  En la siguiente línea deberíamos consumir la respectiva API+
  que nos brinde los datos que necesitemos
  */
  getPostByAuthor(author: string): Observable<IPost> {
    if(author === "breyner") {
      return of({
        blog: "Atolon Rot",
        post: "https://blog.atolonrot.com/como-crear-angular-in-app-navigation-con-ngrx-redux" ,
        author: "Breyner"
      })
    } else {
      return of({
        blog: "Atolon Rot",
        post: "No encontrado" ,
        author: "No encontrado"
      })
    }
  }
}
