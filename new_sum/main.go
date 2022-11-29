package main

import "fmt"

func twoSum(nums []int, target int) []int {
	sum := make(map[int]int)
	for idx, num := range nums {
		if v, ok := sum[target-num]; ok {
			return []int{v, idx}
		}

		sum[num] = idx
	}
	return nil
}
func main() {
	fmt.Println("Salam Aleikum")
}
