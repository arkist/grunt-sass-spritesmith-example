# 'grunt-sass' & 'grunt-spritesmith' example

[grunt](http://gruntjs.com),
[grunt-sass](http://github.com/sindresorhus/grunt-sass),
[grunt-spritesmith](http://github.com/Ensighten/grunt-spritesmith)를 이용해 `ruby-sass + compass` 환경을 대체하기 위한 예제

## 따라해보기

1. [Node.js](http://nodejs.org) 환경을 갖춘다

2. 프로젝트 폴더를 만들어 소스를 체크아웃 받고 폴더로 이동한다 

```shell
git clone https://github.com/arkist/grunt-sass-spritesmith-example.git
cd grunt-sass-spritesmith-example
```

3. 필요한 모듈을 설치한다

```shell
npm install
```

4. `Gruntfile.js`를 참고하며 grunt task들을 테스트 해본다

`grunt dev`와 `grunt dist`의 차이는 완성되는 css 코드의 형태이다.