import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'ImageSrc',
})
export class ImageSrcPipe implements PipeTransform {
  constructor(private http: HttpClient) {}

  async transform(value: any, args?: any): Promise<any> {
    if (Number.parseInt(value)) {
      console.log(environment.urlGetImage);
      return new Promise((resolve, reject) => {
      this.http
        .get<any>(`${environment.urlGetImage}/${value}`)
        .subscribe(async (data) => {
          //console.log(data);

          let blob = await (await fetch(data.blobFile)).blob()
          let urlBlob = URL.createObjectURL(blob);
          console.log(urlBlob);
          resolve(data.blobFile);
          /*const reader = new FileReader();
          reader.onloadend = () => {
            console.log(reader.result);
            URL.createObjectURL(reader.result);
            // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
          };
          reader.readAsDataURL(new File([data], 'vmAzure.png', { type: data.type }));*/
        });
      });
      //return fetch(`${environment.urlGetImage}/${value}`);

      //.then((url) => fetch(url).then((res) => console.log(res.blob())));
    }

    return 'assets' + value;
  }
}
