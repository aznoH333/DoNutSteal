import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blogs = []

  blogToEdit;

  @ViewChild('titleInput') titleInput : ElementRef;
  @ViewChild('textInput') textInput : ElementRef;
  @ViewChild('editTitleInput') editTitleInput : ElementRef;
  @ViewChild('editTextInput') editTextInput : ElementRef;

  addBlog(){
    this.blogs.push([this.titleInput.nativeElement.value,this.textInput.nativeElement.value]);
    this.titleInput.nativeElement.value = "";
    this.textInput.nativeElement.value = "";
  }

  editBlog(){
    console.log(this.editTitleInput.nativeElement.value);
    if (this.editTitleInput.nativeElement.value !=""){
      this.blogToEdit[0] = this.editTitleInput.nativeElement.value;
    }
    if (this.editTextInput.nativeElement.value !="") {
      this.blogToEdit[1] = this.editTextInput.nativeElement.value;
    }

    this.editTitleInput.nativeElement.value = "";
    this.editTextInput.nativeElement.value = "";
    this.blogToEdit = null;
  }

  setBlogToEdit(blog){
    this.blogToEdit = blog;
  }
}
