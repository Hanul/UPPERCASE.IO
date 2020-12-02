# SML
HTML로 변환되는 간단한 마크업 언어

## 설치하기
### Node.js 프로젝트
1. SML 프로젝트를 다운로드 받습니다.
2. 아래 코드를 통해 모듈을 불러옵니다.
	```javascript
	require('./import/UPPERCASE-CORE/NODE.js');
	require('./SML.js');
	```

### UPPERCASE 기반 프로젝트
1. 프로젝트의 `DEPENDENCY` 파일에 `Hanul/SML`를 추가합니다.
2. [`ubm`](https://www.npmjs.com/package/ubm)을 이용해 설치합니다.
    ```
    ubm install
    ```
3. `NODE/MAIN.js`의 `MAIN` 함수에 다음 내용을 추가합니다.
	```javascript
	addRequestListener(SML_BRIDGE({
		rootPath : './'
	}).requestListener);
	```
	
	- `rootPath` `.sml` 파일 혹은 리소스 등이 저장된 경로를 지정합니다.

## 실행 방법
```javascript
var html = SML(READ_FILE({
	path : 'example.sml',
	isSync : true
}).toString());

console.log(html);
```

## 예
`SML`
```sml
meta viewport='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
title 'SML'
body
	h1#logo 'SML'
	p.content '
		Simple (HyperText)
		Markup
		Language
	'
```

`HTML`
```html
<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
		<title>SML</title>
	</head>
	<body>
		<h1 id="logo">SML</h1>
		<p class="content">
			Simple (HyperText)<br>
			Markup<br>
			Language
		</p>
	</body>
</html>
```

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)