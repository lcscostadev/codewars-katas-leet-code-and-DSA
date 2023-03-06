<!-- 
1- Compare the current and next position, if the next position is less then the current position we swap then
2- We still gonna compare the index 0 number to the next number, now in the 2 index position if is less then index 0 we swap else we compare to the next number, on the 3 index position


example:

[1] - [5] - [3]
 0  -> 1 no, so we dont swap
 0       -> 3 yes, so we swap

 we store the value 3 in a temp variable, we pass the index 0 number to the index 3 position and then we pass the temp variable to the index 0 position, we swaped

 now we compare the index 1 pos to the 2 index pos
 [5] - [3]
 1  ->  2, yes, we swap then
 -->