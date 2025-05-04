const removerSeleccionado = () => {
    const seleccionado = document.querySelector('.opcion--seleccionada')
    seleccionado.classList.remove('opcion--seleccionada')
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('opcion')) {
        if(e.target.classList.contains('opcion--seleccionada')) return
        removerSeleccionado()
        e.target.classList.add('opcion--seleccionada')
    }
})