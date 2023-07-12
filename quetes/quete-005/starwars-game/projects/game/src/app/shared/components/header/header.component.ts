import { Component, NgModule, OnInit, inject } from '@angular/core';
import { SearchType } from '../../ui/search/models';
import { SearchService } from '../../ui/search/services';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'game-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true
})
export class HeaderComponent {
}


