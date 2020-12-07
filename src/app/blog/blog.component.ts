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

  blogs = [

  ]
  @ViewChild('titleInput') titleInput : ElementRef;
  @ViewChild('textInput') textInput : ElementRef;

  addBlog(){
    this.blogs.push([this.titleInput.nativeElement.value,this.textInput.nativeElement.value]);
    this.titleInput.nativeElement.value = "";
    this.textInput.nativeElement.value = "";
  }
}
