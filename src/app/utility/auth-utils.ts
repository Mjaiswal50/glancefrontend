
export class AuthUtils {
  private static authToken = 'auth token';
  private static fetchurl: any = "http://localhost:5000/api/user/fetch";
  static getAuthToken() {
    return localStorage.getItem(AuthUtils.authToken);
  }

  static setAuthToken(value:any) {
    localStorage.setItem(AuthUtils.authToken, value);
  }

  static removeAuthToken() {
    localStorage.removeItem(AuthUtils.authToken);
  }

  static getAuthHeaders(){
    return {
      Authorization: `Bearer ${AuthUtils.getAuthToken()}`
    };
  }
}


