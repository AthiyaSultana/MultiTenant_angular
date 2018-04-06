import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Routes} from 'routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router) {

  }

  submitLoginDetails(loginDetails): void {
    const brandRoute = Routes.Dashboard;
    console.log('brandRoute', brandRoute);
    console.log('login details', loginDetails);
    this.http.post('/api/getUserDetails', loginDetails).subscribe((resp: any) => {
      console.log('resp', resp);
      if (resp.message == 'user exists') {
        console.log('if condition');
        var url = '/' + brandRoute;
        console.log('url', url);
        this.router.navigate([url]);
      } else {
        console.log('un authorised user');
      }
    });
  }
}
