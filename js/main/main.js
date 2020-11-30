function openNav(){
    if(window.innerWidth<600){
        document.getElementById('mySidenav').style.width='100%';
    } else {
       document.getElementById('mySidenav').style.width='250px';
    }
    };

    function closeNav(){
        document.getElementById('mySidenav').style.width='0';
    };