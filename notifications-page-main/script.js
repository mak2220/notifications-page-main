const active = document.getElementsByClassName('active');

const comentario = document.getElementsByClassName('whioutReading');

const message = document.getElementsByClassName('message');

const read = document.getElementById('read');

activedStates();

function activedStates(){
    read.addEventListener('click',function(){
        for (let i = 0; i<= active.length; i++) {
            $('.active').removeClass('active');
            $('.circle').remove();
            $('#notif').remove();        
        }
    })
    for(let i=0; i<active.length; i++){
            active[i].addEventListener('click',function(){ 
                this.classList.remove('active');
        })
    };
    for(let i=0; i<comentario.length; i++){
        comentario[i].addEventListener("click",function(){
            this.classList.replace('whioutReading','comentario')
        })
    };
    for(let i=0; i<message.length; i++){
        message[i].addEventListener("click",function(){
            this.classList.replace('message','reading')
        })
    };
}

