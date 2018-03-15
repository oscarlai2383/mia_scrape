var http = require('http'),
    fs = require('fs');

var dir = '\\Users/Fury/Documents/mia_revamp/';
var root_url = 'http://ebook4.ilongman.com/sbo/Xm6ZU7MvJH!g!ceTwt005kPDQgiG-JOloGCsDD7H-jqBe8ZuxnzU6!8sS7VYtja9kflU2HNTPNJwTju3vuKSI0/c6ec6315ae1d8c187821c30ee6ae9d2c/';
var lang = "TradChinese";
var save_dir = dir + lang + "/2B/OLR/";
if(!fs.existsSync(save_dir)){
    fs.mkdirSync(save_dir);
}
imgs = [];
file_name = [];
file_name.push('cover.jpg');
file_name.push('blank.jpg');
for(i=2;i<150;i++){
    file_name.push(i+'.jpg');
}
for(j=0;j<file_name.length;j++){
    imgs.push(root_url + file_name[j]);
}

var download = function(url, dest) {
    var file = fs.createWriteStream(save_dir + dest);
    http.get(url, function(response) {
        if(response.statusCode == 404) return;
        console.log(response.statusCode);
        response.pipe(file);
    });
};

imgs.forEach(function(img, index) {
    download(img, file_name[index]);
});
