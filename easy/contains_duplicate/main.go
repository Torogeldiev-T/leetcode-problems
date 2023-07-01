package containsduplicate_test

import "fmt"

func containsDuplicate(nums []int) bool {
	appeared := make(map[int]bool)
	for i := 0; i < len(nums); i++ {
		if appeared[nums[i]] {
			return true
		}
		appeared[nums[i]] = true
	}
	return false
}

func main() {
	fmt.Println("Salam Aleikum")
}
