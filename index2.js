// Personnel github keys 

const id        =   '';

const secret    =   '';

// init constructor Github

const github    =   new Github(id, secret);

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
                    console.log(':( User Not Found');

                } else {

                    // Show profile
                    console.log(':) User Found');

                }
            })

    } else {

        // Clear profile

    }

});