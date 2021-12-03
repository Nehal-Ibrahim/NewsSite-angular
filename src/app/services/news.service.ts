import { Injectable } from '@angular/core';
import { News } from '../interfaces/news.Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  url='http://localhost:4000/'
  news:News={}

  getAllNews(){
    return this.http.get<News>(this.url+'news')
  }
  addNews(news:News){
    return this.http.post(this.url+'news/add',news)

  }
  deleteNews(id:any){
    return this.http.delete(this.url+'news/'+id)
  }
  getsinglenews(id:any){
    return this.http.get<News>(this.url+'news/'+id)
  }
  updateNews(id:any, news:News){
    return this.http.patch(this.url+'news/'+id,news)
  }
  addImage(image:any,id:any){
    return this.http.post(this.url+'newsimages/'+id,image)
  }
}
