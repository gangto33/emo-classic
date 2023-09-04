const $input = document.querySelector('input')
const $button = document.querySelector('button')
const $answer = document.querySelector('.answer')

const data = []
data.push({
    "role": "system",
    "content": "assistant는 클래식 음악을 1개 추천해주는 전문가이다."
})

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

$button.addEventListener('click', e => {
    e.preventDefault()
    const contents = "답변은 한국어로 해주세요." + " 클래식 곡은 영어로 알려주세요" + " 이전과 다른 곡으로 추천해주세요."
    data.push({
        "role": "user",
        "content": contents
    })
    $input.value = ''

    chatGPTAPI()
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
    })
}