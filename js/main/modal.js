    window.onload=function() {
        var modal=document.getElementById('modal');
        var openBtn=document.getElementById('openBtn');
        var closeBtn=document.getElementById('closeBtn');

        openBtn.onclick=function() {
            modal.style.display='block';
            modal.style.top=0;
        };
        closeBtn.onclick=function() {
            modal.style.display='none';
        };

        window.onclick=function(event) {
            if(event.target == modal){
                modal.style.display='none'
            }
        };
    }