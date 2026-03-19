import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})


export class CandidatesComponent {

  searchText: string = '';
  selectedStatus: string = '';

  stats = {
    total: 120,
    active: 85,
    shortlisted: 25,
    rejected: 10
  };

  candidates = [
    {
      name: 'Rahul Sharma',
      email: 'rahul@mail.com',
      phone: '9876543210',
      job: 'Frontend Developer',
      status: 'Applied'
    },
    {
      name: 'Priya Mehta',
      email: 'priya@mail.com',
      phone: '9876543211',
      job: 'Backend Developer',
      status: 'Interview'
    },
    {
      name: 'Amit Verma',
      email: 'amit@mail.com',
      phone: '9876543212',
      job: 'UI Designer',
      status: 'Hired'
    },
    {
      name: 'Neha Singh',
      email: 'neha@mail.com',
      phone: '9876543213',
      job: 'QA Engineer',
      status: 'Rejected'
    }
  ];

  filteredCandidates() {
    return this.candidates.filter(c => {
      return (
        c.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
        (this.selectedStatus === '' || c.status === this.selectedStatus)
      );
    });
  }
}