package main

import (
	"fmt"
)

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	temp := x
	var reversed int
	for temp != 0 {
		digit := temp % 10
		reversed = reversed*10 + digit
		temp /= 10
	}
	return reversed == x
}

func main() {
	fmt.Println("Salam Aleikum")
}
