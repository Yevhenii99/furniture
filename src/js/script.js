window.addEventListener('DOMContentLoaded', () => {


    //---modal

    function openModal() {
        const btn = document.querySelector('.promo_btn'),
              modal = document.querySelector('.modal');

        btn.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
        });
        setTimeout(function() {
            modal.classList.add('show');
            modal.classList.remove('hide');
        }, 150000);
    }
    openModal();

    function closeModal() {
        const closeBtn = document.querySelector('.modal__close'),
              modal = document.querySelector('.modal');        

              console.dir(modal);

            closeBtn.addEventListener('click', () => {
                modal.classList.remove('show');
                modal.classList.add('hide');

        });
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                modal.classList.add('hide');
                modal.classList.remove('show');
            }
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal && modal.classList.contains('show')) {
                modal.classList.remove('show');
                modal.classList.add('hide');
            }
        });
    }
    closeModal();


    //--- Slider

    function slider() {
        const check = document.querySelector('.line_check_all'),
        checkArrow = document.querySelector('.line_check_all_arrow'),
        lineBox = document.querySelectorAll('.line_box_item'),
        photo1 = document.querySelector('.line_photos_1'),
        photo2 = document.querySelector('.line_photos_2'),
        photo3 = document.querySelector('.line_photos_3'),
        photo4 = document.querySelector('.line_photos_4'),
        photo5 = document.querySelector('.line_photos_5'),
        photo6 = document.querySelector('.line_photos_6');
    }
  





});