import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { News } from 'src/app/interfaces/news.Model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor(private newsservice:NewsService , private router:Router) { }
  news:News={}


  addNews(news:News){
    this.newsservice.addNews(news).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.news=res
        this.router.navigate(['/news'])
        
      }
    })
  }
  

  ngOnInit(): void {
  }

}
