const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () =>{



   console.log( xhr.response)
});

//creates http message to send to backend
xhr.open('GET','https://supersimplebackend.dev/documentation' );
xhr.send();
