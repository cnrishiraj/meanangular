import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { bufferToggle } from 'rxjs/operators';
import {MatSnackBar,MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector:'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
  enteredtitle=" ";
  enteredcontent=" ";
  toggler=false;

 constructor(public postsService: PostsService,private snackbar:MatSnackBar){}

 onAddPost(form:NgForm){
    if(form.invalid){
      return;
    }
    this.toggler=false;
    this.snackbar.open("Task Created Succesfully",'undo', {
      duration: 2000,
    });
      this.postsService.addPost(form.value.title,form.value.content);
      form.resetForm();
      

}
posts:Post[]=[ ];
 private postsSub:Subscription;

ngOnInit(){
  this.postsService.getPosts();
  this.postsSub =this.postsService.getPostUpdatedListener().subscribe((posts:Post[])=>{
    this.posts=posts;
  });
}
onDelete(postId:string){
    this.postsService.deletePost(postId);

}
add(){
  this.toggler=true;
  console.log(this.toggler);
  
}
cancel(){
  this.toggler=false;
}
}
