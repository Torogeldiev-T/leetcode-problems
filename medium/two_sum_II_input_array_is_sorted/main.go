package main

import "fmt"

func twoSum(numbers []int, target int) []int {
	res := []int{}
	for i, j := 0, len(numbers)-1; i < j; {
		if numbers[i]+numbers[j] == target {
			res = []int{i + 1, j + 1}
			break
		} else if numbers[i]+numbers[j] < target {
			i++
		} else {
			j--
		}
	}
	return res
}

func main() {
	fmt.Println("Salam Aleikum")
}
