(function() { 
    const controlls =  document.querySelectorAll('.block-size__item');
    const visibleClass =  'block-size__item--visible';
    console.log(controlls);
    
    controlls.forEach(function(control){
        
        control.addEventListener('click',function(a){
            a.preventDefault();

            controlls.forEach(function(link){
                //console.log(console.log());
                link.classList.remove(visibleClass);
            })

            if ( control.classList.contains('block-size__item--active') ){
                control.classList.add(visibleClass);
            }
            
        })

    })
    
})();