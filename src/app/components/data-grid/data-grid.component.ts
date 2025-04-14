import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService,GridColumn, GridRow } from '../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent implements OnInit {
  columns: GridColumn[] = [];
  rows: GridRow[] = [];
  loading: boolean = false;
  
  

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchGridData().subscribe((data: any) => {
      if (data) {
        // Show loading screen
        this.loading = true;

        setTimeout(() => {
          // Transform columns
          this.columns = data.grid_columns.map((col: any) => ({
            field: col.column_key,
            header: col.column_name,
            align: col.align || 'left',
            type: col.type || 'text'
          }));
    
          // Assign data to rows
          this.rows = data.grid_data || [];
    
          // Hide loading after 2s
          this.loading = false;
    
          console.log(data, "api data", this.columns);
        }, 2000);
      }
    });
  }

  toggleAllNames(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.rows.forEach(row => row.selected = isChecked);
  }

  deleteRow(index: number): void {
    // Adjust the following line if your user name fields are different
    const row = this.rows[index];
    let userName = '';
    if (row['name'] && row['name'].first_name && row['name'].last_name) {
      userName = row['name'].first_name + ' ' + row['name'].last_name;
    } else if (row['first_name'] && row['last_name']) {
      userName = row['first_name'] + ' ' + row['last_name'];
    } else {
      userName = 'this user';
    }
    if (confirm(`Are you sure you want to delete ${userName}? This will only remove them locally until page refresh.`)) {
      this.rows.splice(index, 1);
    }
  }

  editRow(index: number): void {
    const row = this.rows[index];
    let userName = '';
    if (row['name'] && row['name']['first_name'] && row['name']['last_name']) {
      userName = row['name']['first_name'] + ' ' + row['name']['last_name'];
    } else if (row['first_name'] && row['last_name']) {
      userName = row['first_name'] + ' ' + row['last_name'];
    } else {
      userName = 'this user';
    }
    alert(`Selected user: ${userName}`);
  }
}
