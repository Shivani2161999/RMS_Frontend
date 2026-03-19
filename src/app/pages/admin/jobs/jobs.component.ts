import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  // ALL DATA
  jobs = [
    { id: 'JR-101', title: 'Frontend Developer', department: 'IT', status: 'Open', openings: 3, applied: 25 },
    { id: 'JR-102', title: 'Backend Developer', department: 'IT', status: 'Closed', openings: 2, applied: 40 },
    { id: 'JR-103', title: 'HR Executive', department: 'HR', status: 'Open', openings: 1, applied: 15 },
    { id: 'JR-104', title: 'Sales Manager', department: 'Sales', status: 'Open', openings: 2, applied: 30 },
    { id: 'JR-105', title: 'QA Tester', department: 'IT', status: 'Closed', openings: 1, applied: 20 },
    { id: 'JR-106', title: 'Recruiter', department: 'HR', status: 'Open', openings: 2, applied: 18 }
  ];

  // FILTER STATE
  searchText = '';
  selectedStatus = '';
  selectedDept = '';

  filteredJobs = [...this.jobs];

  // PAGINATION
  currentPage = 1;
  pageSize = 3;

  get totalPages() {
    return Math.ceil(this.filteredJobs.length / this.pageSize);
  }

  get paginatedJobs() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredJobs.slice(start, start + this.pageSize);
  }

  // FILTER LOGIC
  filterJobs() {
    this.filteredJobs = this.jobs.filter(job => {
      return (
        (!this.searchText || job.title.toLowerCase().includes(this.searchText.toLowerCase())) &&
        (!this.selectedStatus || job.status === this.selectedStatus) &&
        (!this.selectedDept || job.department === this.selectedDept)
      );
    });

    this.currentPage = 1;
  }

  // PAGINATION
  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

}