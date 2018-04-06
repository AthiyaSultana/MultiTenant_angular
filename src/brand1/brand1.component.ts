import { Component } from '@angular/core';
import { Routes } from 'routes';
import { AppBaseComponent } from 'base-components/app/app.component';

@Component({
  selector: 'app-root',
  templateUrl: './brand1.component.html',
  styleUrls: ['./brand1.component.css']
})
export class Brand1Component extends AppBaseComponent {
  title = 'Tour of Heroes';
}
