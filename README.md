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

after thinking, I decided to let right symbols(+-*/) perform two functions using variable operator to seperate.
I found that compare to '=' with (+-*/) when operator !== null, '=' set operator=null.
in order to let the project to more readable, maybe I can add one more variable.
let result = 0, when operator !== null, result = 1 => calculate result  =>  result = 0
seems like not too effective.

Finished:
I learnt how to delay the function: set variable(shouldResetDisplay), how to let one button performs two functions: using variable to seperate. I also learnt a lot from tutorial and ai in css.

Although tutorial teached me how to perform the function of '0' and '.', there are still a lot difficulties. I learnt delay the function through other person in odin, but I figure out how to let one button performs two functions by myself.

Weakness:
My logic flow is not too smooth which I means I solve the problem likes I am taking an IQ test, I should make it like its solving a real problem. EX: shouldResetDisplay is clean.
Also, I miss a lots of cases while thinking, maybe it's because my example for testing is not good enough. Will there a way that I can test without thinking of a case?