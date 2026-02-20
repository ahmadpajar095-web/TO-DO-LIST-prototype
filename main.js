const daftar = document.querySelector('.daftar-isi')
const kosong = document.querySelector('.kosongan')

let tasks = []
let data = localStorage.getItem("task")
if (data) {
    tasks = JSON.parse(data)
    tasks.forEach(element => {
        const p = document.createElement('div')
        const p1 = document.createElement('div')
        const p2 = document.createElement('div')
        const ol = document.createElement('ol')
        const btn1 = document.createElement('button')
        const btn2 = document.createElement('button')
        const inp = element
        p.classList.add('isi')
        p1.classList.add('isi-1')
        p2.classList.add('isi-2')
        ol.classList.add('task')
        btn1.classList.add('tog-button')
        btn2.classList.add('del-button')
        btn1.textContent = ('berlangsung')
        btn2.textContent = ("hapus")
        btn2.addEventListener("click", function() {
            p.classList.add('slide-out')
            setTimeout(() => p.remove(), 200)
            tasks = tasks.filter(t => t !== inp)
            localStorage.setItem("task", JSON.stringify(tasks))

            const sisatask = document.querySelectorAll('.isi')
            if (sisatask.length === 1 ){
                kosong.textContent = 'tugas tidak ditemukan'
            }
        })
        btn1.addEventListener('click', function() {
            ol.classList.toggle('mark')
            btn1.classList.toggle('fns')
            if (btn1.textContent == 'berlangsung') {
                btn1.textContent = ('selesai')
            }else {
                btn1.textContent = ('berlangsung')
            }
        })
        ol.textContent = (inp)
        p.append(p1)
        p.append(p2)
        p1.append(ol)
        p2.append(btn1)
        p2.append(btn2)
        daftar.append(p)

        
    });
}

function box() {
    const inp = document.querySelector('.input').value
    if (!inp) {
        alert("task tidak boleh kosong")
        return
    }
    if (tasks.includes(inp)) {
        alert("Task dengan isi yang sama sudah ada")
        return

    } else {
        const p = document.createElement('div')
        const p1 = document.createElement('div')
        const p2 = document.createElement('div')
        const ol = document.createElement('ol')
        const btn1 = document.createElement('button')
        const btn2 = document.createElement('button')
        p.classList.add('isi')
        p1.classList.add('isi-1')
        p2.classList.add('isi-2')
        ol.classList.add('task')
        btn1.classList.add('tog-button')
        btn2.classList.add('del-button')
        btn1.textContent = ('berlangsung')
        btn2.textContent = ("hapus")
        tasks.push(inp)
        localStorage.setItem("task", JSON.stringify(tasks))
        btn2.addEventListener("click", function() {
            p.classList.add('slide-out')
            setTimeout(() => p.remove(), 200)
            tasks = tasks.filter(t => t !== inp)
            localStorage.setItem("task", JSON.stringify(tasks))

            const sisatask = document.querySelectorAll('.isi')
            if (sisatask.length === 1 ){
                kosong.textContent = 'tugas tidak ditemukan'
            }
        })
        btn1.addEventListener('click', function() {
            ol.classList.toggle('mark')
            btn1.classList.toggle('fns')
            if (btn1.textContent == 'berlangsung') {
                btn1.textContent = ('selesai')
            }else {
                btn1.textContent = ('berlangsung')
            }
        })
        ol.textContent = (inp)
        p.append(p1)
        p.append(p2)
        p1.append(ol)
        p2.append(btn1)
        p2.append(btn2)
        daftar.append(p)
    }

}

function tambah() {
    if (kosong.textContent == 'tugas tidak ditemukan') {
        kosong.textContent = ''
        box()
    }else {
        box()
    }
}
