import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getTrendingGifs() {
  
  var url =`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=30`; 
    return this.httpClient.get(url);

  }
  
}







