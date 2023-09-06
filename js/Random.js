const $input = document.querySelector('input')
const $button = document.querySelector('.emoButton')
const $randomLink = document.querySelector('.randomLink')
const $chachButton = document.querySelector('.chachButton')

const data = []
data.push({
    "role": "system",
    "content": "assistant는 다양한 클래식 음악을 알려준다."
})

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

$button.addEventListener('click', e => {
    e.preventDefault()
    const contents = " 영어로 알려주세요" + " 곡 앞에 1을 붙여주세요." + " 설명은 하지 마세요."
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

        // 답변의 곡명 추출 후 linkList 에 저장, replace로 링크 정제
        let link = `<p>${res.choices[0].message.content}</p>`.split('1.')[1].split('2.')[0].replace(/,/g, '').replace(/[가-힣]/g, '')

        // 유튜브 링크로 만들어 보내기
        $randomLink.innerHTML = `<input type="checkbox" value='${link}'/><a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(link)}" target="_blank">${link}</a>`
    })
}

// 캐시 데이터를 localStorage에 저장
var k = 40;

function getSelectedMusic() {

    // localStorage에 데이터 저장
    if (localStorage.getItem('k')){
        k = parseInt(localStorage.getItem('k'))
    }

    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let IsCheck = []
    checkboxes.forEach(function(item) {
        if (item.checked) {
            IsCheck.push(item.value)
        }
    })

    localStorage.setItem(k, IsCheck);
    k++
    localStorage.setItem('k', k);

    checkboxes.forEach((checkbox) => {
        checkbox.checked = false
    });
}
