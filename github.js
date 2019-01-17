// Github api

class Github {

    constructor(id, secret) {

        this.clientID     =   id;
        this.clientSecret =   secret;

    }

    async getUser(user) {

        const profileResponse  = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

        const profile     =   await profileResponse.json();

        return {

            profile
        
        }

    }

}