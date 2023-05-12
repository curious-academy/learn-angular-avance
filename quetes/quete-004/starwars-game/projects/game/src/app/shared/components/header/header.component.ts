import { Component, OnInit, inject } from '@angular/core';
import { SearchType } from '../../ui/search/models';
import { SearchService } from '../../ui/search/services';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private readonly searchService = inject(SearchService);
  searchItem: SearchType = { value: '' }


  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    this.searchService.search(this.searchItem);
  }

}
