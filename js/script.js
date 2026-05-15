const btn = document.querySelectorAll('.pass')

const div1 = document.querySelector('.vant1')
const div2 = document.querySelector('.vant2')

btn.forEach(btn => {
    btn.addEventListener('click', () => {

        if (div1.style.display === 'flex') {
            div1.style.display = 'none'
            div2.style.display = 'flex'
        } else {
            div1.style.display = 'flex'
            div2.style.display = 'none'
        }

    })
})