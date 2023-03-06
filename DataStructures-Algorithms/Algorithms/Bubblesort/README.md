<!-- we make operations with the two values, the first one and the subsequent, we compare then and if the subsequent value is smaller than the previous, we make an swap places, because we always want the bigger value to be the next value -->

<!-- Example number 1 -->

const arr = [1,34,3,65,78,9,10];

if 1 < 34 = 34 remains at the same position

if 34 < 3 = 34 is bigger than 3 so we swap then [1, 3, 34]

if 34 < 65 = 65 is bigger so remains at same position

65 < 78 = again bigger, it remains at same position 

78 < 9 = its smaller so we swap [1,3,34,65,9,78]

78 < 10 = its smaller so we swap again [1,3,34,65,9,10,78];

so at the end of this loop we know that the highest value is the last one -> 78

but this list inst quite right, since 34 and 65 is before 9, 10, so we need to loop again and make the same thing

1 < 3 = yes, do nothing.

3 < 34 = yes, do nothing.

34 < 65 = yes, do nothing.

65 < 9 = no, we swap [1,3,34,9,65,10,78]

65 < 10 = no, we swap [1,3,34,9,10,65,78]

we reach the end of the loop again, but the list still not great, so we go again

1 < 3 = yes, do nothing.

3 < 34 = yes, do nothing.

34 < 9 = no, we swap [1,3,9,34,10,65,78]

34 < 10 = no we swap [1,3,9,10,34,65,78]

we reach the end of the loop and our list is now right