export function setCookie(name, value) {
    
    var cookie = name + "=" + encodeURIComponent(value);
    document.cookie = cookie;
}

export function getCookie(name) {
    
    var cookieArr = document.cookie.split(";");
    
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    return null;
}