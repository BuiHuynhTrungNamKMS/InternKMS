import CookieService from "./CookieService";

const expiresAt = 60 * 24;

interface Credentials {
  username: string;
  password: string;
}

class AuthService {
  handleLoginSuccess(response: any) {

    const options = { path: "/"};
    CookieService.set("accessToken", response.accessToken, options);
    return true;

    // let date = new Date();
    // date.setTime(date.getTime() + expiresAt * 60 * 1000);
    // const options = { path: "/", expires: date };
    // CookieService.set("access_token", response.access_token, options);
    // return true;
  }
}

export default new AuthService();