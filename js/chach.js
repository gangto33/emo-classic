const $emoChach = document.querySelector('.emoChach')
const $SituationChach = document.querySelector('.SituationChach')
const $RandomChach = document.querySelector('.RandomChach')

document.addEventListener('DOMContentLoaded', () => {

    // localStorage 에 적재 된 emoChach 가져오기
    for(var i=0; i<20; i++){
        if(localStorage.getItem(i)){
            let emoChach = localStorage.getItem(i).split(',')
    
            for(var j=0; j<emoChach.length; j++){
                if(emoChach[j].length > 1){
                    $emoChach.innerHTML += `<li><a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(emoChach[j])}" target="_blank">${emoChach[j]}</a></li>`
                }
            }
        }
        
    }

    // localStorage 에 적재 된 SituationChach 가져오기
    for(var i=20; i<40; i++){
        if(localStorage.getItem(i)){
            let SituationChach = localStorage.getItem(i).split(',')
    
            for(var j=0; j<SituationChach.length; j++){
                if(SituationChach[j].length > 1){
                    $SituationChach.innerHTML += `<li><a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(SituationChach[j])}" target="_blank">${SituationChach[j]}</a></li>`
                }
            }
        }
        
    }

    // localStorage 에 적재 된 RandomChach 가져오기
    for(var i=40; i<60; i++){
        if(localStorage.getItem(i)){
            let RandomChach = localStorage.getItem(i).split(',')
    
            for(var j=0; j<RandomChach.length; j++){
                if(RandomChach[j].length > 1){
                    $RandomChach.innerHTML += `<li><a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(RandomChach[j])}" target="_blank">${RandomChach[j]}</a></li>`
                }
            }
        }
        
    }
})

// 캐시 삭제
function clearChach(){
    localStorage.clear()
}