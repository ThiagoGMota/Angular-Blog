import { Component, Input, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../fake-data/fake-data.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NavBarComponent, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit{
 @Input()
 title: string = '';
 @Input()
 date: string = '';
 @Input()
 cover: string= '';
 @Input()
 subtitle: string = '';
 @Input()
 text: string = ''

 private id:string | null = "0"
 constructor(private route:ActivatedRoute){ }

 ngOnInit(): void {
   this.route.paramMap.subscribe(value =>{
      this.id = value.get("id");
     })
     this.setValuesToComponent(this.id)
 }

 setValuesToComponent(id:string | null){
  const result = dataFake.filter(article => article.id == id)[0]

  this.title = result.title
  this.date = result.date
  this.cover = result.cover
  this.subtitle = result.subtitle
  this.text = result.text
 }

}
