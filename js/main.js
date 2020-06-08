const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: 'RADWIMPS',
        artist: 'RADWIMPS.mp3',
        url: 'css/RADWIMPS.mp3',
        cover: 'https://gitee.com/chuyuxuan/tuc/raw/master/avatar/hanlingmo.jpg'
    }],
    fixed: true,
    autoplay:true,
});


document.getElementsByTagName('img')[0].onmousedown = function(e){
    e.preventDefault()
};
document.getElementsByClassName('avatar')[0].onmousedown = function(e){
    e.preventDefault()
};