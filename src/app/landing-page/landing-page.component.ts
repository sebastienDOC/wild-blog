import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  logo: string = 'https://i.ibb.co/09qftbn/Pngtree-human-with-spoon-and-fork-3628124.png'
  image: string = 'https://i.ibb.co/MPpXztL/pexels-ansel-lee-1635554-3499599.jpg'
  title: string = 'Restaurant'
}
