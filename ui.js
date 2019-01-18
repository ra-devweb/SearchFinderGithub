// UI profile

class UI {

    constructor() {

        this.profile    =   document.getElementById('profile');

    }

    // display profile in ui

    showProfile(user) {

        this.profile.innerHTML  =   `
        
            <div class="card">

                <div class="card-header">

                    <div class="card-header-title is-centered">
                        <div class="card-header-icon">
                            <i class="fas fa-user fa-lg fa-fw"></i>
                            ${user.name}
                        </div>
                    </div>
                
                </div>
            
                <div class="columns">

                    <div class="column is-two-fifths">
                        <div style="margin: 1rem" class="card-image">
                            <figure class="image is-4by3">
                                <img src="${user.avatar_url}" alt="Profile image">
                            </figure>
                        </div>
                        <br>
                        <div style="margin-right: 1rem; margin-left: 1rem">
                            <a target="_blank" class="button is-large is-link is-fullwidth" href="${user.html_url}">
                                <span class="icon is-medium">
                                    <i class="fab fa-github"></i>
                                </span>
                                <span>Visite profile</span>
                            </a>
                        </div>
                    </div>
                
                    <div class="column is-three-fifths">
                        <div class="card-content">
                            <div class="field is-grouped is-grouped-multiline">
                                <div class="control">
                                    <div class="tags has-addons">
                                        <span class="tag is-dark">Public Repos:</span>
                                        <span class="tag is-link">${user.public_repos}</span>
                                    </div>
                                </div>
                                <div class="control">
                                    <div class="tags has-addons">
                                        <span class="tag is-dark">Public Gists:</span>
                                        <span class="tag is-link">${user.public_gists}</span>
                                    </div>
                                </div>
                                <div class="control">
                                    <div class="tags has-addons">
                                        <span class="tag is-dark">Followers:</span>
                                        <span class="tag is-link">${user.followers}</span>
                                    </div>
                                </div>
                                <div class="control">
                                    <div class="tags has-addons">
                                        <span class="tag is-dark">Following:</span>
                                        <span class="tag is-link">${user.following}</span>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <aside class="menu">
                                <p class="menu-label">
                                    Info
                                </p>
                                <ul class="menu-list">
                                    <li class="menu-item"><a target="_blank" href="${user.html_url}">Company: ${user.company}</a></li>
                                    <li><a target="_blank" href="${user.blog}">Website/blog: ${user.blog}</a></li>
                                    <li><a target="_blank" href="${user.html_url}">Location: ${user.location}</a></li>
                                    <li><a target="_blank" href="${user.html_url}">Member Since: ${user.created_at}</a></li>
                                </ul>
                            
                            </aside>
                        </div>
                    </div>
                
                </div>

                <hr>

                <div class="card-header">

                    <div class="card-header-title is-centered">
                        <p class="title">
                            Latest Repos
                        </p>
                        <br><br>
                    </div>
                
                </div>

                <br>

                <div id="repo"></div>

            </div>

        `;

    }

    showRepos(repos) {

        let output  =   '';

        repos.forEach(function(repo) {

            output += `
                
                <div class="columns">
                
                    <div class="column is-half">
                        <div class="card-content">
                            <a href="${repo.html_url}" target="_blank" class="title">
                                ${repo.name}
                            </a>
                        </div>
                    </div>

                    <div class="column is-half">
                        <div class="tags has-addons">
                            <span class="tag is-dark">Stars :</span>
                            <span class="tag is-link">${repo.stargazers_count}</span>
                        </div>
                        <div class="tags has-addons">
                            <span class="tag is-dark">Watchers :</span>
                            <span class="tag is-link">${repo.watchers_count}</span>
                        </div>
                        <div class="tags has-addons">
                            <span class="tag is-dark">Forks :</span>
                            <span class="tag is-link">${repo.forks_count}</span>
                        </div>
                    </div>
                
                </div>

                <hr class="hr-repos">
            
            `;
            
        });

        document.getElementById('repo').innerHTML    =   output;

    }

    // Show alert if profile don't found in ui

    showAlert(message, className) {

        // Clear any remainning alert

        this.clearAlert();

        // Create article for message alert

        const article   =   document.createElement('article');

        article.className   =   className;

        const output    =   `

            <div class="message-header">
                <p>Alert</p>
            </div>
            <div class="message-body is-centered">
                ${message}
            </div>
        
        `;

        article.innerHTML   =   output;

        const result    =   document.querySelector('.result');

        const profileResult =   document.querySelector('#profile');


        // insert article before profile results

        result.insertBefore(article, profileResult);

        // remove alert after 3sec if the profile found

        setTimeout(() => { this.clearAlert();  }, 3000);

    }

    // Clear alert Message

    clearAlert() {

        const alertMessage  =   document.querySelector('.is-danger');

        if(alertMessage) {

            alertMessage.remove();

        }

    }

    // Clear the profile ui

    clearProfile() {

        this.profile.innerHTML  =   '';

    }

}