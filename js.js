const daftar = document.querySelector('.daftar-isi')
const kosong = document.querySelector('.kosongan')

function box() {
    const p = document.createElement('div')
    const p1 = document.createElement('div')
    const p2 = document.createElement('div')
    const ol = document.createElement('ol')
    const btn1 = document.createElement('button')
    const btn2 = document.createElement('button')
    const inp = document.querySelector('.input').value
    p.classList.add('isi')
    p1.classList.add('isi-1')
    p2.classList.add('isi-2')
    ol.classList.add('task')
    btn1.classList.add('tog-button')
    btn2.classList.add('del-button')
    btn1.textContent = ('berlangsung')
    btn2.textContent = ("hapus")
    btn2.addEventListener("click", function() {
        p.remove()
        p1.remove()
        p2.remove()
        ol.remove()
        btn1.remove()
        btn2.remove()
        if (daftar.children.length === 1){
            kosong.textContent = 'tugas tidak ditemukan'
        }
    })
    btn1.addEventListener('click', function() {
        ol.classList.toggle('mark')
        btn1.classList.toggle('fns')
    })
    ol.textContent = (inp)
    p.append(p1)
    p.append(p2)
    p1.append(ol)
    p2.append(btn1)
    p2.append(btn2)
    daftar.append(p)

}

function tambah() {
    if (kosong.textContent == 'tugas tidak ditemukan') {
        kosong.textContent = ''
        box()
    }else {
        box()
    }
}
