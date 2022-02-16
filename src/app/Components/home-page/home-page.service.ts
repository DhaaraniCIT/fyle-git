import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/config/api.service';
import { ConfigService } from 'src/app/config/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private apiService: ApiService, private configService: ConfigService,private http:HttpClient) { }

  getUserdetails(user){
    return this.http.get('https://api.github.com/users/'+user)
  } 
  getUserRepo(user){
    return this.http.get(this.configService.userUrl+'/'+user+'/repos')
  }
}
