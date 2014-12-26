module.exports = function(target) {
  var timestamp = new Date().getTime();
  var distFileName = target+'-'+timestamp;

  return {
    cssFormat: 'scss',
    cssVarMap: function(sprite) {
      var name = target.replace('@', '');
      sprite.name = target+'-' + sprite.name;
    },
    imgPath: '../images/'+distFileName+'.png',
    cssTemplate: 'sass/sprite/'+target+'.scss.mustache',
    src: 'images/'+target+'/*.png',
    dest: 'dist/images/'+distFileName+'.png',
    destCss: 'sass/sprite/'+target+'.scss'
  };
}
