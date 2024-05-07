import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],

})
export class SIdeBarComponent {
  isOpen: boolean = false;
sidenav: any;
  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

// panelOpenState = false;

}
