import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfDownloadService {

  constructor(private http: HttpClient) {}

  download(url: string, filename: string) {
    this.http.get(url, { responseType: 'blob' })
      .subscribe(blob => {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);

        a.href = objectUrl;
        a.download = filename;
        a.click();

        URL.revokeObjectURL(objectUrl);
      });
  }
}
