import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { QueryableResource } from './models/queryable-resource';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly queryableResourcesUrl = `assets/mocked-data-json/queryableResources.json`;

  constructor(private http: HttpClient) {}

  getQueryableResources$() {
    return this.http
      .get<apiQueryableResources>(this.queryableResourcesUrl)
      .pipe(map((apiResponse) => apiResponse.data));
  }
}
type apiQueryableResources = { data: QueryableResource[] };
