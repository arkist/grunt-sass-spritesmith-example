module.exports = {
  '1x': spriteConfig('sprite'),
  '2x': spriteConfig('sprite2x')
};

function spriteConfig(target) {
  var timestamp = getTime();
  var distFileName = target+'-'+timestamp;

  return {
    engine: 'pngsmith',
    algorithm: 'binary-tree',
    padding: 2,
    cssFormat: 'scss',
    imgPath: '../images/'+distFileName+'.png',
    cssTemplate: 'src/scss/sprite/'+target+'.scss.mustache',
    destCSS: 'src/scss/sprite/'+target+'.scss',
    cssVarMap: function(sprite) {
      sprite.name = target+'-'+sprite.name;
    },
    src: 'src/images/'+target+'/*.png',
    destImg: 'dist/images/sprite/'+distFileName+'.png'
  };
}

function getTime() {
  var date = new Date();
  var day = date.toISOString().split('T')[0];
  var time = date.toTimeString().split(' ')[0].replace(/:/g, '-');
  var timeString = day+'-'+time;

  return timeString;
}