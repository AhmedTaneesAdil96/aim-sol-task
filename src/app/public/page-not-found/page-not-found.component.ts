import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  countdown: number = 10; // Set initial countdown to 10 seconds

  constructor(private router: Router) {}

  ngOnInit(): void {
    const countdownElement = document.getElementById('countdown');

    const timer = setInterval(() => {
      this.countdown--;
      if (countdownElement) {
        countdownElement.textContent = this.countdown.toString();
      }
      if (this.countdown === 0) {
        clearInterval(timer);
        this.routeToHome();
      }
    }, 1000); // Update every 1 second
  }

  routeToHome() {
    this.router.navigateByUrl('/app/dashboard').then();
  }
}
