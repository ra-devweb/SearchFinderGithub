// Get lambda variables

const getIdAndSecretKeys    =  async (url) => {

    const response  =   await fetch(url);

    const resIdSecret   =  await response.json();
    
    return resIdSecret;

}

const url   =   '/.netlify/functions/return-env';

getIdAndSecretKeys(url)
    .then(data => console.log(data.ID, data.SECRET));

const id        =   '8775de41cceb4c72188a';

const secret    =   '9a0a4073bdf157733591f1ab21821e5f320e34a7';

// Init class Github

const github    =   new Github(id, secret);

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

