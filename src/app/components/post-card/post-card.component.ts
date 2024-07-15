import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent implements OnInit{
  @Input()
  titlePost:string =''
  @Input()
  datePost:string =''
  @Input()
  contentPost:string = ``
  @Input()
  id:string = "0";
  constructor(){}
  ngOnInit(): void {}
}
