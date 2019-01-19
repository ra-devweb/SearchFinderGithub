// Get lambda variables method if you have netlify variables

const getIdAndSecretKeys    =  async (url) => {

    const response  =   await fetch(url);

    const resIdSecret   =  await response.json();
    
    return resIdSecret;

}

const url   =   '/.netlify/functions/return-env';



// Init class Github

const github    =   getIdAndSecretKeys(url)
                        .then(data => {

                            const id        = data.id;

                            const secret    =   data.secret;

                            return new Github(id, secret);

                        });

console.log(github);

// Init profile UI

const ui        =  new UI();

// Search input

const searchUser    =   document.getElementById('searchUser');

// Search input event listener

searchUser.addEventListener('keyup', (e) => {

    const userText  =   e.target.value;

    if (userText !== '') {

        // Make http call
        
        github.getUser(userText)
            .then( data => { 
                if(data.profile.message === 'Not Found') {

                    // Show alert
                    ui.showAlert(':( User Not Found', 'message is-danger');

                } else {

                    // Show profile
                    ui.showProfile(data.profile);

                    // Show repos
                    ui.showRepos(data.repos);

                }
            })

    } else {

        // Clear profile

        ui.clearProfile();

    }

});

