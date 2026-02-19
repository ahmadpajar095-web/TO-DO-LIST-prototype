const daftar = document.querySelector('.daftar-isi')
const kosong = document.querySelector('.kosongan')

function box() {
    const p = document.createElement('div')
    const ol = document.createElement('ol')
    const btn = document.createElement('button')
    const inp = document.querySelector('.input').value
    p.classList.add('isi')
    ol.classList.add('task')
    btn.classList.add('in-button')
    btn.textContent = ("hapus")
    btn.addEventListener("click", function() {
        p.remove()
        ol.remove()
        btn.remove()
        if (daftar.children.length === 1){
            kosong.textContent = 'tugas tidak ditemukan'
        }
    })
    ol.textContent = (inp)
    p.append(ol)
    p.append(btn)
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
