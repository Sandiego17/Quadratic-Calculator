const calc = document.getElementById('calc')
const result = document.getElementById('result')

add.addEventListener('click', () => {
    const firstInput = document.getElementById('first-input').value
    const secondInput = document.getElementById('second-input').value
    result.innerText = firstInput + ' + ' + secondInput + ' = ' + (Number(firstInput) + Number(secondInput))
})

function almighty(a,b,c) {
    let d = Math.sqrt(b**2 - 4*a*c)
    let z = 2*a
    const x1 = (-b + d)/z
    debugger
    const x2 = (-b - d)/z
    return {x1, x2}
}
almighty(6, -1, -5)