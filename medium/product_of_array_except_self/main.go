package main

import "fmt"

func productExceptSelf(nums []int) []int {
	productRes := make([]int, len(nums))
	prefix := make([]int, len(nums))
	postfix := make([]int, len(nums))

	for i := 0; i < len(nums); i++ {
		prefixValue := nums[i]
		if i != 0 {
			prefixValue = prefix[i-1] * nums[i]
		}
		prefix[i] = prefixValue
	}

	for i := len(nums) - 1; i >= 0; i-- {
		postfixValue := nums[i]
		if i != len(nums)-1 {
			postfixValue = postfix[i+1] * nums[i]
		}
		postfix[i] = postfixValue
	}
	for i := 0; i < len(nums); i++ {
		if i == 0 {
			productRes[i] = postfix[i+1]
		} else if i == len(nums)-1 {
			productRes[i] = prefix[i-1]
		} else {
			productRes[i] = prefix[i-1] * postfix[i+1]
		}
	}

	return productRes
}
func main() {
	fmt.Println("Salam Aleikum")
}
