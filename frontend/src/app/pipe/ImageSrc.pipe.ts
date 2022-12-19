import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'ImageSrc',
})
export class ImageSrcPipe implements PipeTransform {
  constructor(private http: HttpClient) {}

  async transform(value: any, args?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get<any>(`${environment.urlGetImage}/${value}`)
        .pipe(
          catchError((err) => {
            return [{ blobFile: '/assets/404/error-404.jpg' }];
          })
        )
        .subscribe((data) => {
          console.log(value,data?.blobFile);
          resolve(data.blobFile);
        });
    });
  }
}
