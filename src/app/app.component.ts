import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploadDownloadService } from './file-upload-download.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileupload';
  selectedFiles : any;
  currentFile! :File;
  files: any;


  constructor(private http : HttpClient,private fileService : FileUploadDownloadService){}
  selectFile(event : any){
this.selectedFiles = event.target.files
  }

  uploadFile(){
    if(this.selectedFiles){
      const file : File = this.selectedFiles.item(0);
      if(file){
this.currentFile = file;
this.fileService.uploadFile(file).subscribe(res=>{

})
      }
    }
  }

  loadFiles() {
    this.fileService.getFiles().subscribe(
      (res) => {
        this.files = res;
      }
    );
  }

  getFileUrl(id: number): string {
    return `${this.fileService.baseUrl}/files/${id}`;
  }
}
