// UI profile

class UI {

    constructor() {

        this.profile    =   document.getElementById('profile');

    }

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
                
                    <div class="column is-three-fifths">
                        <div class="card-content">
                            <div class="field is-grouped is-grouped-multiline">
                                <div class="control">
                                    <div class="tags has-addons">
                                        <span class="tag is-dark">Public Repos:</span>
                                        <span class="tag is-info">${user.public_repos}</span>
                                    </div>
                                </div>
                                <div class="control">
                                    <div class="tags has-addons">
                                        <span class="tag is-dark">Public Gists:</span>
                                        <span class="tag is-warning">${user.public_gists}</span>
                                    </div>
                                </div>
                                <div class="control">
                                    <div class="tags has-addons">
                                        <span class="tag is-dark">Followers:</span>
                                        <span class="tag is-success">${user.followers}</span>
                                    </div>
                                </div>
                                <div class="control">
                                    <div class="tags has-addons">
                                        <span class="tag is-dark">Following:</span>
                                        <span class="tag is-primary">${user.following}</span>
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
                
                </div>

                <div class="card-footer">
                
                    <div class="card-header-title is-centered">
                        <p class="title">
                            Latest Repos
                        </p>
                    </div>
                
                </div>

                <div class="card-footer">

                    <div class="card-content" id="repo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    </div>
                
                </div>

            </div>

        `;

    }

}