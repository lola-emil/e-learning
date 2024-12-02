import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';


@Injectable({
  providedIn: "root"
})
export class PermissionService {
  constructor(private router: Router) {}

  authGuard(route: ActivatedRouteSnapshot) {
    let role = "student";
    let allowedRoles = route.data["roles"] as Array<string>;
    const matchedRole = allowedRoles.filter(val => val == role);
  
    if (matchedRole.length > 0)
      return true;
  
    this.router.navigate(["/page-not-found"]);
    return false;
  }
};

export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionService).authGuard(route);
};