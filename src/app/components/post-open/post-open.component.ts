import { Component, Input } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { dataFake } from '../../fake-data/fake-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-open',
  standalone: true,
  imports: [RouterModule,CommonModule,PostCardComponent,NavBarComponent],
  templateUrl: './post-open.component.html',
  styleUrl: './post-open.component.scss'
})
export class PostOpenComponent {
  /* @Input()
  titlePost:string =''
  @Input()
  datePost:string =''
  @Input()
  contentPost:string = ``
  @Input()
  id:string = "0"; */
  @Input()
  id:string = "0";
  post = dataFake[0]
  updatePost(id:string){
    this.post = dataFake.find(p => p.id == id) || dataFake[0]
  }
  dataFake = dataFake;
  currentPostIndex = 0;

  get currentPost() {
    return this.dataFake[this.currentPostIndex];
  }

  showNextPost() {
    this.currentPostIndex = (this.currentPostIndex + 1) % this.dataFake.length;
  }
}
