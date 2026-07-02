# odin-calculator
I did my first two parts in js(numbers and top symbols) using the tutorial on youtube: https://www.youtube.com/watch?v=KM8PIiqq97c, but some parts of his project is not what I want to do.
His project seems can only memorise two values.
Let's carify my thought:
example:(6 + 7) * 4 = 52
1. type 6
2. type + 
3. type 7 
show '7' on display.value
4. type * (start different here)
show '13' 
5. type 4
6. type =
show result '52'
also show the whole formula on top of display.value

when add second operator, we should check if operator = null, if no,calculate first two first (set a = diplay.value),show the result, add result on a, operator = second operator
seems like right symbols are very similar in this way, maybe we don't have to seperate '='.