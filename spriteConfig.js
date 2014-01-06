module.exports = function(target) {
  // 캐시문제 해결을 위해 매번 새로운 파일을 생성하도록 한
  var timestamp = new Date().getTime();
  var distFileName = target+'-'+timestamp;

  return {
    engine: 'pngsmith',
    algorithm: 'binary-tree',
    padding: 2,
    cssFormat: 'scss',
    imgPath: '../images/'+distFileName+'.png',
    cssTemplate: 'sass/sprite/'+target+'.scss.mustache',
    destCSS: 'sass/sprite/'+target+'.scss',
    cssVarMap: function(sprite) {
      var name = target.replace('@', '');
      sprite.name = target+'-' + sprite.name;
    },
    src: 'images/'+target+'/*.png',
    destImg: 'dist/images/'+distFileName+'.png'
  };
}