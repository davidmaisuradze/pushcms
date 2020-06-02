import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getNotificationStatistics = data =>
    this.http.get(`/api/admin/statistics/notifications`, {
      params: {
        fromDate: data.fromDate,
        toDate: data.toDate
      }
    });
}
