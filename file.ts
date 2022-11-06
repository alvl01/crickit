let item = 0
let tm = TM1637.create(7, 4)
tm.showNumber(1234)
tm.showDP(1, true)
tm.intensity(2)
pause(1000)
tm.intensity(8)
pause(1000)
forever(function () {
    tm.showNumber(item)
    item += 1
    pause(1000)
})
