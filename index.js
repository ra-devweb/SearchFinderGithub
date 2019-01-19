// Get lambda variables method if you have netlify variables

const getIdAndSecretKeys    =  async () => {

    const response  =   await fetch('/.netlify/functions/return-env');

    const resIdSecret   =  await response.json();
    
    return {resIdSecret.id, resIdSecret.secret}

}

// Init class Github

const github    =  new Github(getIdAndSecretKeys());

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

