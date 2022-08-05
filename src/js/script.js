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
        const wrapper = document.querySelector('.wrapper'),
              slideField = document.querySelector('.inside_block'),
              slides = document.querySelectorAll('.line_photos img'),
              width = window.getComputedStyle(wrapper).width,
              checkAll = document.querySelector('.line_check_all');

              let offset = 0;

              slideField.style.width = 100 * slides.length + '%';
              slideField.style.display = 'flex';
              slideField.style.transition = '1.0s all';
              wrapper.style.overflow = 'hidden';

              slides.forEach(item => {
                item.style.width = width;
                item.style.cssText = `
                display: flex;
                position: absolute;
                width: 230px;
                height: 350px;
                margin-top: 900px;
                z-index: 1000;
                position: relative;
                border-radius: 5%;
                backround: center (center / cover) no-repeat;
                `;
              });

              checkAll.addEventListener('click', () => {
                if (offset === +width.slice(0, width.length - 2) * (slides.length - 5)) {
                    offset = 0;
                } else {
                    offset += +width.slice(0, width.length - 2);
                }
                slideField.style.transform = `translateX(-${offset}px)`;
              });

    };
    slider();
  





});