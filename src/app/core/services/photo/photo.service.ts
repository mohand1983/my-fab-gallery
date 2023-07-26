import { Injectable } from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera'
import { PhotoType } from '../../Types/photo-type';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

   /**
   * photos list
   * @var Array<photoType>
   */
   private _photos: PhotoType[] = []

  constructor() { }
  public async addPhotoToGallery() {
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality:100
    })

    //Store pic in the photo array
    this._photos.unshift({
      filePath: 'Will coming soon ...',
      webviewPath:capture.webPath

    })

  }
  public get photos(): Array<PhotoType>{
    return this._photos
  }

  private async savePicture(photo: Photo) { }
      
}
