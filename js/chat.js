const $input = document.querySelector('input')
const $button = document.querySelector('.emoButton')
const $answer = document.querySelector('.answer')
const $chachButton = document.querySelector('.chachButton')

const $link1 = document.querySelector('.link1')
const $link2 = document.querySelector('.link2')
const $link3 = document.querySelector('.link3')
const $link4 = document.querySelector('.link4')
const $link5 = document.querySelector('.link5')

const data = []
const linkList = [0, 1, 2, 3, 4]

data.push({
    "role": "system",
    "content": "assistant는 상황에 맞는 클래식 5곡을 추천하는 전문가이다."
})

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

$button.addEventListener('click', e => {
    e.preventDefault()
    const contents = $input.value + " 5개의 곡을 1. ~ 5. 를 사용해 알려주세요." + " 클래식 곡명과 작곡가는 꼭 영어로 알려주세요" + " 상황에 공감하는 말을 해주세요."
    data.push({
        "role": "user",
        "content": contents
    })
    $input.value = ''

    chatGPTAPI()

    // 버튼 생성
    $chachButton.classList.add("getButton")

    // 데이터 초기화
    data.pop();
})

function chatGPTAPI() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        // 답변 온 것을 assistant로 저장
        $answer.innerHTML = `<p>${res.choices[0].message.content}</p>`

        // 답변의 곡명 추출 후 linkList 에 저장
        let link = `<p>${res.choices[0].message.content}</p>`.split('1.')[1]

        for(var i=0; i<4; i++){
            let nextLink = link.split(`${i+2}.`)
            linkList[i] = nextLink[0]
            link = nextLink[1]
        }

        let lastLink = link.split(/([가-힣])/)

        //  곡명 앞에 한글이 붙을 경우의 오류 방지
        if (lastLink[0] === ' ') {
            link = lastLink.pop().split(/([가-힣])/)
            linkList[4] = link[0]
        } else {
            linkList[4] = lastLink[0]
        }
        
        // 링크 정제 과정
        for(var i=0; i<5; i++){
            linkList[i] = linkList[i].replace(/,/g, '').replace(/[가-힣|.]/g, '').replace(/[(-)]/g, '')
        }
        
        // 유튜브 링크로 만들어 보내기
        $link1.innerHTML = `<input type="checkbox" value='${linkList[0]}'/><a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(linkList[0])}" target="_blank">${linkList[0]}</a>`
        $link2.innerHTML = `<input type="checkbox" value='${linkList[1]}'/><a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(linkList[1])}" target="_blank">${linkList[1]}</a>`
        $link3.innerHTML = `<input type="checkbox" value='${linkList[2]}'/><a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(linkList[2])}" target="_blank">${linkList[2]}</a>`
        $link4.innerHTML = `<input type="checkbox" value='${linkList[3]}'/><a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(linkList[3])}" target="_blank">${linkList[3]}</a>`
        $link5.innerHTML = `<input type="checkbox" value='${linkList[4]}'/><a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(linkList[4])}" target="_blank">${linkList[4]}</a>`
    })
}

// 캐시 데이터를 localStorage에 저장
var i = 0;

function getSelectedMusic() {

    // localStorage에 데이터 저장
    if (localStorage.getItem('i')){
        i = parseInt(localStorage.getItem('i'))
    }

    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let IsCheck = []
    checkboxes.forEach(function(item) {
        if (item.checked) {
            IsCheck.push(item.value)
        }
    })

    localStorage.setItem(i, IsCheck);
    i++
    localStorage.setItem('i', i);

    checkboxes.forEach((checkbox) => {
        checkbox.checked = false
    });
}
