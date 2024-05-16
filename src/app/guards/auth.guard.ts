import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  const isLoggedIn = !!localStorage.getItem('token');

  if(isLoggedIn){
    // console.log("user logged in")
  return true;
  }
  else{
    // debugger
    // console.log("user not logged in so lets redirect to login")
    router.navigate(['/login']);
  return false;

  }
};
