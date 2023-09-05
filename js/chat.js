const $input = document.querySelector('input')
const $button = document.querySelector('button')
const $answer = document.querySelector('.answer')

const $link1 = document.querySelector('.link1')
const $link2 = document.querySelector('.link2')
const $link3 = document.querySelector('.link3')
const $link4 = document.querySelector('.link4')
const $link5 = document.querySelector('.link5')

const data = []
const linkList = [0, 1, 2, 3, 4]
data.push({
    "role": "system",
    "content": "assistant는 감정을 위로하는 클래식 곡을 추천해주는 전문가이다."
})

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

$button.addEventListener('click', e => {
    e.preventDefault()
    const contents = $input.value + " 곡은 꼭 1 ~ 5 를 사용한 형식으로 5개 알려주세요." + " 클래식 곡명은 꼭 영어만 사용하세요"
    data.push({
        "role": "user",
        "content": contents
    })
    $input.value = ''

    chatGPTAPI()

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

        
        // 유튜브 링크로 만들어 보내기
        $link1.innerHTML = `<a href="https://www.youtube.com/results?search_query= ${linkList[0]}" target="_blank">${linkList[0]}</a>`
        $link2.innerHTML = `<a href="https://www.youtube.com/results?search_query= ${linkList[1]}" target="_blank">${linkList[1]}</a>`
        $link3.innerHTML = `<a href="https://www.youtube.com/results?search_query= ${linkList[2]}" target="_blank">${linkList[2]}</a>`
        $link4.innerHTML = `<a href="https://www.youtube.com/results?search_query= ${linkList[3]}" target="_blank">${linkList[3]}</a>`
        $link5.innerHTML = `<a href="https://www.youtube.com/results?search_query= ${linkList[4]}" target="_blank">${linkList[4]}</a>`
    })
}
