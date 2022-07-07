//import Cookie from "universal-cookie";
import Cookies from 'js-cookie'

class CookieService {
  get(key: string) {
    return Cookies.get(key);
  }

  set(key: string, value: string, options: object) {
    Cookies.set(key, value, options);
  }

  remove(key: string) {
    Cookies.remove(key);
  }
}

export default new CookieService();