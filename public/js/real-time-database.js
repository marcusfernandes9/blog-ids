var email_suspect = document.getElementById('email_suspect')

document.getElementById("btn_suspect").addEventListener("click", function(){
    createEmailSuspect(email_suspect.values)
  }); 

function createEmailSuspect(email){
    var data = {
        email: email
    }

    //return firebase.database().ref('suspect').set(data)
    return firebase.database().ref('suspect').set(data)

}