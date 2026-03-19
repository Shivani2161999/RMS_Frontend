import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.loadCharts();
  }
  applicationsCount = 120;
offersCount = 35;
joinedCount = 20;

  loadCharts() {

    // 🔵 JOBS OPENED (Grouped Bar Chart)
    new Chart('jobsChart', {
      type: 'bar',
      data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [
          {
            label: 'Jobs Opened',
            data: [18, 22, 15, 28, 30, 24],
            backgroundColor: '#3b82f6',
            borderRadius: 6,
            barPercentage: 0.5
          },
          {
            label: 'Filled',
            data: [14, 18, 12, 24, 26, 20],
            backgroundColor: '#10b981',
            borderRadius: 6,
            barPercentage: 0.5
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });


    // 🟢 EMPLOYEES BY DEPARTMENT (Doughnut Chart)
    new Chart('hiredChart', {
      type: 'doughnut',
      data: {
        labels: ['IT', 'HR', 'Finance', 'Sales', 'Marketing'],
        datasets: [
          {
            label: 'Employees',
            data: [120, 60, 80, 140, 90],
            backgroundColor: [
              '#3b82f6', // blue
              '#10b981', // green
              '#f59e0b', // orange
              '#ef4444', // red
              '#8b5cf6'  // purple
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        cutout: '60%', // 🔥 makes it doughnut style
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    });

  }
}