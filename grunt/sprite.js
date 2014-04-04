module.exports = {
  '1x': spriteConfig('sprite'),
  '2x': spriteConfig('sprite2x')
};

function spriteConfig(target) {
  var timestamp = new Date().getTime();
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
