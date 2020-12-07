import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  links = [

  ];
  searchContet = [
    ["Home",""],
    ["About","about"],
    ["Contact","contact"],
    ["Blog","blog"]
  ];
  @ViewChild('searchBar') searchBar : ElementRef;


  updateSeach(){
    //this.searchVal = document.getElementById("searchBar").innerText;
    this.links = []
    if(this.searchBar.nativeElement.value != ""){
      for (let i = 0;i < this.searchContet.length;i++){
        if(this.searchContet[i][0].toLowerCase().search(this.searchBar.nativeElement.value.toLowerCase()) > -1){
          this.links[this.links.length] = this.searchContet[i]
        }
      }
    }
  }
}
