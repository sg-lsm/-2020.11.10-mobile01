window.onload=function() {
    var moreTitle = document.getElementById('moreTitle');
    var moreCaption = document.getElementById('moreCaption');
    var modalInnerCaption01 = document.getElementsByClassName('modalInnerCaption01')
    var modalInnerCaption02 = document.getElementsByClassName('modalInnerCaption02')
    var openBtn = document.getElementById('openBtn')

    openBtn.onclick=function() {
        moreTitle.innerHTML = document.getElementById('modalInnerCaption01');
    }
}