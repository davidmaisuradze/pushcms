import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthModuleService {
  constructor(private httpClient: HttpClient) {}

  login(email, password) {
    return this.httpClient.post('/api/admin/auth/login', { email, password });
  }
}
