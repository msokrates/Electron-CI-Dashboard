const TfsSettings = require("./tfsSettings.js");
const remote  = require('electron').remote;
const path = require('path');
const url = require('url');

if(TfsSettings.getTfsUrl())
{
    navigationToProjects();
}

var submitTfsButton = document.getElementById("enterTfsUrlButton");
submitTfsButton.addEventListener("click", () => {
    var tfsUrl = document.getElementById("enterTfsUrlInput").value;
    if(!tfsUrl) {
        return;
    }

    TfsSettings.storeTfsUrl(tfsUrl);
    navigationToProjects();
});

function navigationToProjects() {
    remote.getCurrentWindow().loadURL(url.format({
        pathname: path.join(__dirname, 'projects.html'),
        protocol: 'file:',
        slashes: true
    }));
}
