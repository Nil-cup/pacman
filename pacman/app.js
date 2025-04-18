document.addEventListener('DOMContentLoaded', () => {
    const scoreDisplay = document.getElementById('score')
    const width = 28
    let score = 0
    const grid = document.querySelector('.grid')

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 1, 2, 2, 1, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    // 0- pac-dot
    // 1- mur
    // 2- cau dels fantasmes
    // 3- power-pellet
    // 4- camí

    const squares = []

    function createBoard() {

        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div')
            square.id = i
            grid.appendChild(square)
            squares.push(square)

            if (layout[i] === 0) {

                squares[i].classList.add('pac-dot')
            }

            if (layout[i] === 1) {

                squares[i].classList.add('wall')
            }

            if (layout[i] === 2) {

                squares[i].classList.add('ghost-lair')
            }

            if (layout[i] === 3) {

                squares[i].classList.add('power-pellet')
            }






        }

    }

    createBoard()
    let = pacmanCurrentIndex = 490
    squares[pacmanCurrentIndex].classList.add('pac-man')

    function movePacman(e) {
        //console.log(e.key)
        squares[pacmanCurrentIndex].classList.remove('pac-man')

        switch (e.key) {

            case 'a':
                if (
                    !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex -= 1
                }
                if (pacmanCurrentIndex - 1 === 363)
                    pacmanCurrentIndex = 391

                break

            case 'd':
                if (
                    !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex += 1
                }
                if (pacmanCurrentIndex + 1 === 392)
                    pacmanCurrentIndex = 364

                break

            case 'w':
                if (
                    !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex -= width
                }

                break

            case 's':
                if (
                    !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
                ) {
                    pacmanCurrentIndex += width
                }
                break

        }
        squares[pacmanCurrentIndex].classList.add('pac-man')

        pacDotEaten()
        powerPelletEaten()
        //checkForWin()
        checkForWin2()
        checkForGameOver()

    }


    document.addEventListener('keyup', movePacman)


    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
            score++
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('pac-dot')

        }
    }

    function powerPelletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
            score += 10
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('power-pellet')
            scaredGhost(true)
            setTimeout(() => scaredGhost(false), 10000
            )

        }
    }


    function scaredGhost(scaredState) {
        ghosts.forEach(ghosts => ghosts.isScared = scaredState)

    }


    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    const ghosts = [
        new Ghost('blinky', 348, 250),
        new Ghost('pinky', 376, 400),
        new Ghost('inky', 351, 300),
        new Ghost('clyde', 379, 500)
    ]
    ghosts.forEach(ghost => {

        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')

    })

    ghosts.forEach(ghost => moveGhosts(ghost))

    function moveGhosts(ghost) {

        const directions = [-1, 1, width, -width]

        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(function () {

            if (

                !squares[ghost.currentIndex + direction].classList.contains('wall') && !squares[ghost.currentIndex + direction].classList.contains('ghost')) {

                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex += direction
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')

            } else direction = directions[Math.floor(Math.random() * directions.length)]

            if (ghost.isScared) {

                squares[ghost.currentIndex].classList.add('scared-ghost')
            }

            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {

                score = +100
                scoreDisplay.innerHTML = score
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex = ghost.startIndex
                ghost.isScared = false
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')


            }
            checkForGameOver()


        }, ghost.speed)

    }

    function checkForGameOver() {

        if (
            squares[pacmanCurrentIndex].classList.contains('ghost') && squares[pacmanCurrentIndex].classList.contains('scared-ghost')
        ) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            setTimeout(function () {

                alert('Game Over')
            }, 100
            )
        }
    }
    function checkForWin() {
        if (score >= 274) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            setTimeout(function () {

                alert('Win')
            }, 100
            )
        }
    }


    function checkForWin2() {
        const remainingPellet = grid.querySelectorAll('.pac-dot, .power-pellet')

        if (remainingPellet.length == 0) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            setTimeout(function () {

                alert('Clap clap')
            }, 100
            )
        }
    }



})

