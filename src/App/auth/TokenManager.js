import config from "../../store/config";

export default class TokenManager {
  static instance;

  token = null;
  lastToken = new Date().getTime();

  static getInstance() {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager();
    }

    return TokenManager.instance;
  }

  getToken() {
    // if (this.token && new Date().getTime() - this.lastToken < (30 * 1000 * 60)) {
    //   return new Promise(() => this.token, _ => {});
    // }

    var loginInfo = { username: "admin", password: "admin" };
    return fetch(config.API_URL + "/token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    }).then((response) => {
      this.token = response.headers.get("X-Auth");
      this.lastToken = new Date().getTime();
      return response.headers.get("X-Auth");
    });
  }
}
