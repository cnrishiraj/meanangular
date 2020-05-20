import { Component, OnInit, OnDestroy} from "@angular/core";
import { sharedStylesheetJitUrl } from '@angular/compiler';
import {PostsService} from '../post.service';
import {Subscription } from 'rxjs';

import { Post } from '../post.model';

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy{

// posts= [
//   { title:'first post',content:'This is the first post\'s content' },
//   { title:'second post',content:'This is the second post\'s content' },
//   { title:'third post',content:'This is the third post\'s content' }
// ]
 posts:Post[]=[ ];
 isLoading=false;
 private postsSub:Subscription;
constructor(public postsService:PostsService){}
ngOnInit(){
  this.isLoading=true;
  this.postsService.getPosts();
  this.postsSub =this.postsService.getPostUpdatedListener().subscribe((posts:Post[])=>{
    this.isLoading=false;
    this.posts=posts;
  });
}
onDelete(postId:string){
    this.postsService.deletePost(postId);

}
ngOnDestroy(){
  this.postsSub.unsubscribe();
}

}
