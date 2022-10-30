console.log("This is file downloader");
const inputUrl = document.getElementById('inputUrl');
const downloadBtn = document.getElementById('download-Btn');

downloadBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    fetchFile(inputUrl.value);
});

function fetchFile(url){
    fetch(url).then((response)=>{
        let resp = response.blob();
        return resp;
    }).then((data)=>{
        console.log(data);
        let tempUrl = URL.createObjectURL(data);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = "filename";
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }).catch(()=>"Something went wrong..");
}