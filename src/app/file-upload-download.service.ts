import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadDownloadService {
   baseUrl = 'http://localhost:3000';
  constructor(private http : HttpClient) { }

  uploadFile(file : File) : Observable<any>{
    const formData : FormData = new FormData();
    formData.append('file', file);
return this.http.post(this.baseUrl + '/upload',formData);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
  getFile(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/files/${id}`, { responseType: 'blob' });
  }

  getFileUrl(id: number): string {
    return `${this.baseUrl}/files/${id}`;
  }
}
