//Getting the data from the homepage
const urlParams = new URLSearchParams(window.location.search);
const params = ['gym', 'muaythai', 'running', 'other'];

for (i = 0; i < params.length; i++){
    if (urlParams.get(params[i]) === 'on'){
        document.getElementById(params[i] + 'routine').style.display = 'initial';
    }
}
