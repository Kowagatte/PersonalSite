
let url = "https://api.github.com/repos/Kowagatte/Damocles/commits";

let json = JSON.parse(httpGet(url));
var s= document.getElementById("githubcommits");
s.innerHTML = "<hr class='reader'>";
for(let i =0; i < json.length; i++){
    if(json[i] !=null){
            let date = json[i]["commit"]["committer"]["date"];
            date = date.split("T");
            let string = s.innerHTML;
            string += "<strong> <a class='reader' href =" + json[i]["html_url"] + ">"
            if(json[i]["committer"] == null){
               string += "<img src = https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png style=\"max-width:30px;max-height:30px;\"></img>";
            }else{
                string += "<img src = " + json[i]["committer"]["avatar_url"] + " style=\"max-width:30;max-height:30px;\"></img>";
            }
            string += "<span class='readerText'>" + json[i]["commit"]["author"]["name"] +": " + json[i]["commit"]["message"]+ " [ "+ date[0] + " @" + date[1].split("Z")[0] +" ]</span>" + "</a>" +"</strong>" + "<hr class='reader'>"  +"\n";
            s.innerHTML = string;
    }
}

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
