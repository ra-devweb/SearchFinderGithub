// Github api

class Github {

    constructor(id, secret) {

        this.clientID       =   id;
        this.clientSecret   =   secret;
        this.repos_count    =   5;
        this.repos_short    =   'created: asc';


    }

    async getUser(user) {

        const profileResponse  = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

        const reposResponse  = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`);

        const profile     =   await profileResponse.json();

        const repos     =   await reposResponse.json();

        return {

            profile,

            repos
        
        }

    }

}