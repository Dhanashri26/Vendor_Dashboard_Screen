import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { VendorChartScreenComponent } from "./components/vendor-chart-screen/vendor-chart-screen.component";
import { DataGridComponent } from "./components/data-grid/data-grid.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, VendorChartScreenComponent, DataGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vendor_dashboard';
}
