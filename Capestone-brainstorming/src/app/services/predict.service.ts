import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prediction } from '../models/Prediction';

@Injectable({
  providedIn: 'root',
})
export class PredictService {
  private baseURL = 'http://localhost:8080/predictions';
  constructor(private httpClient: HttpClient) {}

  insertPrediction(prediction: Prediction): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, prediction);
  }
  updatePrediction(id: number, prediction: Prediction): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}${id}`, prediction);
  }
  deletePrediction(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}${id}`);
  }

  getPredictionsList(): Observable<Prediction[]> {
    return this.httpClient.get<Prediction[]>(`${this.baseURL}`);
  }

  getPredictionById(id: number): Observable<Prediction> {
    return this.httpClient.get<Prediction>(`${this.baseURL}${id}`);
  }
}
