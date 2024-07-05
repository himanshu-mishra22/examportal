// import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { LoginService } from "./login.service";
// import { Injectable } from "@angular/core";

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor{
//     constructor(private login:LoginService){}


//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         let authReq = req;
//         const token = this.login.getToken();
//         console.log("Token:", token);
//         if (token) {
//             authReq = req.clone({
//               headers: req.headers.set('Authorization', `Bearer ${token}`)
//             });
//           }
//         return next.handle(authReq);
    
//     }
// }

// export const authInterceptorProvider=[
//     {
//         provide : HTTP_INTERCEPTORS,
//         useClass: AuthInterceptor,
//         multi: true,
//     },
// ];