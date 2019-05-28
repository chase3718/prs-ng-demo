import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UploadFileService} from '../upload-file.service';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html'
})
export class ListUploadComponent implements OnInit {
 
  showFile = false
  fileUploads: Observable<string[]>
 
  constructor(private uploadService: UploadFileService) {}
 
  ngOnInit() {
  }
 
  showFiles(enable: boolean) {
    this.showFile = enable
 
    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }
}