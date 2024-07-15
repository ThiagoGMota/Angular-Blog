import { Component, Input } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@Component({
  selector: 'app-post-open',
  standalone: true,
  imports: [PostCardComponent,NavBarComponent],
  templateUrl: './post-open.component.html',
  styleUrl: './post-open.component.scss'
})
export class PostOpenComponent {

}
