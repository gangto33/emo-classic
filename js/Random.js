const $input = document.querySelector('input')
const $button = document.querySelector('button')
const $randomLink = document.querySelector('.randomLink')

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

        // 답변의 곡명 추출 후 linkList 에 저장
        let link = `<p>${res.choices[0].message.content}</p>`.split('1.')[1].split('2.')[0]

        // 유튜브 링크로 만들어 보내기
        $randomLink.innerHTML = `<a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(link)}" target="_blank">${link}</a>`
    })
}
