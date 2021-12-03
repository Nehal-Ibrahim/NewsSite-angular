import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/interfaces/news.Model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsservice:NewsService , private route:ActivatedRoute) { }
  _id=this.route.snapshot.params['id']
  news:News[]=[]
  getAllNews(){
    this.newsservice.getAllNews().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.news=res
      }
    })
  }
  deleteNews(news:News){
    this.newsservice.deleteNews(news._id).subscribe({
      next:()=>{
        let index=this.news.indexOf(news)
        this.news.splice(index,1)
      }
    })
  }
  getsinglenewsk(){
    this.newsservice.getsinglenews(this._id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.news=res
      }
    })
  }
  updateNews(news:News){
    this.newsservice.updateNews(this._id,news).subscribe(()=>{})
  }

  ngOnInit(): void {
    this.getAllNews()
  }

}
