import { Injectable } from '@angular/core';
import { ApiService } from '@core/service/api.service';

@Injectable()
export class UploadService {
    constructor(
        private http: ApiService
    ) { }

    upload(file) {
        return this.http.send('post', 'upload', file);
    }
}