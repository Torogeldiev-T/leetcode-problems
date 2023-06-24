package jumpgameii_test

import (
	"fmt"
)

func jump(nums []int) int {
	length := len(nums)
	steps := make([]int, length)

	for i := length - 1; i >= 0; i-- {
		if i == length-1 {
			steps[i] = 0
			continue
		}
		min := 0

		if i+nums[i] >= length-1 {
			steps[i] = 1
			continue
		}
		for j := 1; j <= nums[i]; j++ {
			// first check if target is not zero because we cannot move from there than
			// second block: for the first check we assign default value if true
			// second block: for the >= second case we assign if its less then minimal steps

			if steps[i+j] != 0 && (min == 0 || 1+steps[i+j] < min) {
				min = 1 + steps[i+j]
			}
		}
		steps[i] = min
	}
	return steps[0]
}

func main() {
	fmt.Println("Salam Aleikum")
}
