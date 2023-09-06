const $emocache = document.querySelector('.emocache')
const $Situationcache = document.querySelector('.Situationcache')
const $Randomcache = document.querySelector('.Randomcache')

document.addEventListener('DOMContentLoaded', () => {

    // localStorage 에 적재 된 emocache 가져오기
    for(var i=0; i<20; i++){
        if(localStorage.getItem(i)){
            let emocache = localStorage.getItem(i).split(',')
    
            for(var j=0; j<emocache.length; j++){
                if(emocache[j].length > 1){
                    $emocache.innerHTML += `<li><a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(emocache[j])}" target="_blank">${emocache[j]}</a></li>`
                }
            }
        }
        
    }

    // localStorage 에 적재 된 Situationcache 가져오기
    for(var i=20; i<40; i++){
        if(localStorage.getItem(i)){
            let Situationcache = localStorage.getItem(i).split(',')
    
            for(var j=0; j<Situationcache.length; j++){
                if(Situationcache[j].length > 1){
                    $Situationcache.innerHTML += `<li><a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(Situationcache[j])}" target="_blank">${Situationcache[j]}</a></li>`
                }
            }
        }
        
    }

    // localStorage 에 적재 된 Randomcache 가져오기
    for(var i=40; i<60; i++){
        if(localStorage.getItem(i)){
            let Randomcache = localStorage.getItem(i).split(',')
    
            for(var j=0; j<Randomcache.length; j++){
                if(Randomcache[j].length > 1){
                    $Randomcache.innerHTML += `<li><a href="https://www.youtube.com/results?search_query= ${encodeURIComponent(Randomcache[j])}" target="_blank">${Randomcache[j]}</a></li>`
                }
            }
        }
        
    }
})

// 캐시 삭제
function clearcache(){
    localStorage.clear()
}
