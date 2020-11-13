export const ajax = (url, callback, method = "GET", headers={
    "X-Requested-With":"XMLHttpRequest",
    "Access-Control-Allow-Origin":"*",
    "Content-Type":"application/json",
    "Accept":"application/jason"
})=>{
    if (!url) return console.error("Request Required");
    if (!callback) return console.error("Callback Required");
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (evt)=>{
        let req = evt.target;
        if (req.readyState !== 4) return;
        if (req.status === 200 || req.status == 304) return callback(req.response);
        callback(null, req.status);
        });
    
    request.open(method, url)

    request.send();
    };

    let value = (res, input) => document.body.append(res);
    // ajax("https://randomuser.me/api/", value);
    ajax("https://randomuser.me/api/?gender=female&inc=name&results=20", value);
