import { CommonModule } from '@angular/common';
import { Component, NgModule, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchType } from './models';
import { SearchService } from './services';

@Component({
  selector: 'game-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  private readonly searchService = inject(SearchService);
  searchItem: SearchType = { value: '' }


  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    this.searchService.search(this.searchItem);
  }
}

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
