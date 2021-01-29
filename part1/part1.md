1. i = prices.length will be successfully printed because var i was declared and assigned a value in the loop before line 11,
which due to the nature of var will be within its scope.
2. discountedPrice = prices[prices.length-1]*(1-discount) will be successfully printed. 
(The value assigned in the last iteration of the loop, , which due to the nature of var will be within its scope.)
 Note: prices.length-1 is just the index of the last element of the prices array.
3. finalPrice was declared and initialzed earlier in the function before the loop and is therefore within scope to be printed successfully.
(Especially since due to the nature of var being globally accessible).
4. discountedPrices([100,200,300],.5) will return [50,100,150] because the function essentially takes all the input
prices array values and multiplies them by 1 - discount value. It rounds at the hundredth places decimal.

5. Error because i is not defined within the scope, it is within only the loop before it.
6. Error because discountedPrice is not defined within the scope, it is within only the loop before it.
7. Successful print of finalPrice becausee it was defined and initialized earlier within the same scope.
8. Assuming that the function does not error like in #5 and #6, discountedPrices([100,200,300],.5) will return [50,100,150] because the function essentially takes all the input
prices array values and multiplies them by 1 - discount value. It rounds at the hundredth places decimal.

9. Error because i is not defined within the scope, it is within only the loop before it.
10. Error because discountedPrice is not defined within the scope, it is within only the loop before it.
11. Since constants cannot be changed, if we ignore the errors in the for loop, this should print 0
since finalPrice cannot be changed.
12. If we use the original assigned value of the constants and ignore all errored value assignments, then
this will print [0,0,0] since finalPrice of 0 cannot be changed.

13.
A. student.name
B. student["Grad Year"]
C. student.greeting()
D. student["Favorite Teacher"].name
E. student.courseLoad[0]

14.
A. "32" because the 2 is converted to a string then appended.
B. The number 1 is the result because '3' is turned into an integer then subtracted 2 from.
C. The number 3 is the result because null is counted as 0 as a number, so 3 + 0.
D. The string "3null" because null is converted to a string then appended.
E. The number 4 because true is counted as 1 in math operations, so 1 + 3.
F. The number 0 because false and null are both counted as 0 in arithmetic operations.
G: The string "3undefined because undefined is convertede to a string since 3 is a string here and thus appended.
H: The number NaN because undefined is not a number and arithmetic operations such as subtraction doesn't work with it.

15.
A. '2' is turned into a number for the comparison and 2 > 1 is evaluated as true.
B. '2' is higher than '1' in '12' in terms of lexicographical order so this is evaluated as false.
C. '2' is turned into a number for the comparison and thus 2 == '2' is true.
D. 2 === '2' is false because this is a strict comparison and thus '2' is not converted here.
E. true == 2 is false because true = 1 in a numerical comparison.
F. true === Boolean(2) is true because Boolean(2) results in true, which is strictly equal to true.

16. == is a comparison that uses type conversion, === is a strict comparison that does not use type conversion.

17. 'How are you?' gets printed because 2 == true is false, this is essentially 2 == 1 which is false. next,
the else if (2) evaluates to true because 2 is true as a boolean, thus explaining the result.

18. Javascript file included

19. The result is [6,8,10] because modifyArray takes the input array elements, passes it through the callback function,
then pushes the each returned element * 2 into the newArr, hence the results.

20. Javascript file included

21.
1
4
3
2
is the output.