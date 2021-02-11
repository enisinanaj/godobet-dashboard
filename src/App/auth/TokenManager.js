import config from '../../store/config'

export default class TokenManager {
    static instance;

    static getInstance()
    {
        if (!TokenManager.instance) {
            TokenManager.instance = new TokenManager();
        }

        return this.instance;
    }

    getToken() {
        var loginInfo={username: 'admin', password: 'admin'};
        return fetch( config.API_URL + '/token', 
            {
                method: 'POST', 
                headers: 
                {
                    'content-type': 'application/json'
                }, 
                body: JSON.stringify(loginInfo)
            }
        )
        .then((response) => response.headers.get('X-Auth'));
    }
}