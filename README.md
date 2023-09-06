# emo-classic

# 1. 카카오 오븐을 통한 초기 구상.
https://ovenapp.io/project/fdVoju98zML3Nsbo6xfCv9H7UZHzyHGf#A3c09

![카카오오븐](./img/카카오오븐.png)

처음 gpt를 활용하여 흔치 않은 사이트를 만들 수는 없을까 고민하다, 사람의 감정과 클래식을 엮어보기로 했습니다.
<br>
<br>
대중음악에 비해 많이 듣지 않는 클래식 음악을 본인의 감정이나 상황, 장소 등의 간단한 단어를 통해 쉽게 접할 수 있도록 하였으며,<br>
지친 사람들을 위로할 수 있으면 좋겠다는 생각으로 구상하였습니다.<br>
<br>

감정에 지친 사람들이 위로를 받는 용도이기에 사용이 용이할 수록 목적에 더 나아갈 수 있다 생각했으며,<br>
<br>
클래식 특성 상 곡의 제목이 복잡하거나 낯설어 기억이 쉽지 않았기에 원하는 음악을 따로 기억해줄 수 있는 장치가 있으면 좋겠다는 생각을 하여, 구상 단계에서부터 Cache를 넣을 생각을 했습니다.
<br>
<br>
사이트의 이름은 Emotion에서 따와 emo-classic으로 지었으나, 전달력이 좋고 발음하기 쉬운 "에모" 클래식으로 정했으며 약칭은 'emo'(에모) 입니다.
<br>
<br>

완성본의 화면과 매우 흡사하며, 초기 구상을 토대로 제작하였습니다.
<br>
<br>
# 2. 설계.
카카오 오븐을 토대로 제작에 들어갔으며, 좌측에 emo(감정), Situation(상황, 장소), Random(무작위) 의 세 가지 컨텐츠와 하단에 캐시 메모리를 두었습니다.
<br>
<br>
화면의 백그라운드에는 종이 재질의 이미지를 삽입하였으며, 종이에 글씨를 적은 것 같은 느낌을 주기 위해 필기체와 유사한 글씨를 선택하였습니다.
<br>
<br>
또한, 이질적인 느낌을 줄이기 위해 글자의 색을 브라운 계열 의 부드러운 색으로 변경하였으며, 메인 컨텐츠는 눈에 더 사로잡힐 수 있도록 black으로 두었습니다.
<br>
<br>
기존에는 문답 형식의 간단한 텍스쳐 뿐이었으나, gpt의 곡 추천이 다양한 말들과 함께 나와 추천받은 곡이 한 눈에 보이지 않았고,<br>
<br>
추천받은 곡을 듣기 위해서는 동영상 사이트에 들어가 스스로 검색을 해야하는 번거로움이 있었기에 실용성이 부족하다고 판단하여, gpt의 답변에서 곡 제목을 추출해내 링크 리스트를 만드는 것이 좋을 것 같다 생각하여 이행했습니다.
<br>
<br>

# 3. 다양한 문제들.

```js
$link1.innerHTML = `<input type="checkbox" value='${linkList[0]}'/><a href="https://www.youtube.com/results?search_query= ${linkList[0]}" target="_blank">${linkList[0]}</a>`
$link2.innerHTML = `<input type="checkbox" value='${linkList[1]}'/><a href="https://www.youtube.com/results?search_query= ${linkList[1]}" target="_blank">${linkList[1]}</a>`
$link3.innerHTML = `<input type="checkbox" value='${linkList[2]}'/><a href="https://www.youtube.com/results?search_query= ${linkList[2]}" target="_blank">${linkList[2]}</a>`
$link4.innerHTML = `<input type="checkbox" value='${linkList[3]}'/><a href="https://www.youtube.com/results?search_query= ${linkList[3]}" target="_blank">${linkList[3]}</a>`
$link5.innerHTML = `<input type="checkbox" value='${linkList[4]}'/><a href="https://www.youtube.com/results?search_query= ${linkList[4]}" target="_blank">${linkList[4]}</a>`
```
<br>
gpt의 답변을 의도적으로 1.~5.의 배열 형식으로 얻을 수 있게 한 다음 split() 함수를 이용, 한 번도 사용하지 않은 정규표현식까지 어찌저찌 찾아가며 링크를 추출해 냈습니다.
<br>
<br>
미리 html 내부에 만들어 둔 ```<ul></ul>``` 에 나중에 cache 데이터를 보관하는데 필요한 checkbox를 사용하면서 곡명에 유튜브의 검색 링크를 붙여,
<br>
gpt의 답변을 받아 넣는 마지막 .then() 함수 내부에 함께 넣어 질문을 받으면 같이 동작하도록 코딩하였습니다.
<br>
<br>
그러나, 링크가 되다가 안 됐다가 하는 오류가 발생하였고, 아예 안 되는 것은 아니었기에 어디에서 오류가 나는 건지 찾기가 힘들었습니다.
<br>
수많은 검색 후에 encodeURIComponent() 함수를 알게 되었고, 주소창이 받아드리는 문자가 따로 있어 인코딩을 해야 한다는 것을 알고 해결했습니다.
<br>
<br>





encodeURIComponent()



