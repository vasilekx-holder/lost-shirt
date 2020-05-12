(function() { 
    const controlls =  document.querySelectorAll('.block-colour__link');
    const visibleClass =  'block-colour__circuit--visible';
    cl = 'black';

    const controll_t_shirt =  document.querySelectorAll('.t-shirt__img');
    console.log(controll_t_shirt);
    const visibleClass_t_shirt =  't-shirt__img--visible';

    controlls.forEach(function(control){

        control.addEventListener('click', function(e){
            e.preventDefault();

            controlls.forEach(function(link){
                link.closest('.block-colour__item').querySelector('.block-colour__circuit').classList.remove(visibleClass);
            });
            
            control.closest('.block-colour__item').querySelector('.block-colour__circuit').classList.add(visibleClass);

            //поиск нужного цвета
            let colourClass = control.closest('.block-colour__item').querySelector('.block-colour__circuit');

            if ( colourClass.classList.contains('block-colour__circuit--onBlack')){
                console.log('click on Black');
                cl = 'black';
            }
            else if( colourClass.classList.contains('block-colour__circuit--onWhite') ){
                console.log('click on White');
                cl = 'white';
            }
            else if( colourClass.classList.contains('block-colour__circuit--onGreen') ){
                console.log('click on Green');
                cl = 'green';
            }
            else if( colourClass.classList.contains('block-colour__circuit--onBlue') ){
                console.log('click on Blue');
                cl = 'blue';
            }
            else if( colourClass.classList.contains('block-colour__circuit--onRed') ){
                console.log('click on Red');
                cl = 'red';
            }

            //выбор t-shirt
            controll_t_shirt.forEach(function(link){
                link.classList.remove(visibleClass_t_shirt);
            });

            controll_t_shirt.forEach(function(link){

                if ( (cl == 'black') && (link.classList.contains('t-shirt__img--black')) ){
                    link.classList.add(visibleClass_t_shirt);
                }
                else if( (cl == 'white') && (link.classList.contains('t-shirt__img--white')) ){
                    link.classList.add(visibleClass_t_shirt);
                }
                else if( (cl == 'green') && (link.classList.contains('t-shirt__img--green')) ){
                    link.classList.add(visibleClass_t_shirt);
                }
                else if( (cl == 'blue') && (link.classList.contains('t-shirt__img--blue')) ){
                    link.classList.add(visibleClass_t_shirt);
                }
                else if( (cl == 'red') && (link.classList.contains('t-shirt__img--red')) ){
                    link.classList.add(visibleClass_t_shirt);
                }

            });

        });
    });

    
})();