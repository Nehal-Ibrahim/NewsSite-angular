import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/interfaces/news.Model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  constructor(private newsservice:NewsService , private router:Router ,private route:ActivatedRoute) { }
  news:News={}
  file:any
  id:string=this.route.snapshot.params['id']
  getsinglenews(){
    this.newsservice.getsinglenews(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.news=res

      }
    })
  }

  handleupload(event:any){
    console.log(event.target.files)
    this.file=event.target.files
  }
  uploadfile(){
    const myData=new FormData()
    for(let i=0;i<this.file.length;i++){
      myData.append('avatar',this.file[i])

    }
    this.newsservice.addImage(myData,this.id).subscribe(()=>{})
  }

updateNews(news:News){
    this.newsservice.updateNews(this.id,news).subscribe({
      next:(res:any)=>{
        this.news=res
        this.uploadfile()
        this.router.navigate(['/news'])

      }

    })
  }
 

  ngOnInit(): void {
    this.getsinglenews()
  }

}
