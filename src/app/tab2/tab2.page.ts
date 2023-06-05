import { Component } from '@angular/core';
import { PhotoService } from '../core/services/photo/photo.service';
import { PhotoType } from '../core/Types/photo-type';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public photoService: PhotoService
  ) { }

  /**
   * Take photo from the fab button
   * @see photoService
   */
  public addPhotoToGallery(): void{
    this.photoService.addPhotoToGallery()
  }

}
