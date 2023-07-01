package main

import (
	"fmt"
	"sort"
)

func topKFrequent(nums []int, k int) []int {
	numOccurences := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		numOccurences[nums[i]]++
	}
	sortedOccurences := []int{}
	for _, occurences := range numOccurences {
		sortedOccurences = append(sortedOccurences, occurences)
	}
	changed := false
	sort.Slice(sortedOccurences, func(i, j int) bool {
		if sortedOccurences[i] > sortedOccurences[j] || sortedOccurences[i] < sortedOccurences[j] {
			changed = true
		}
		return sortedOccurences[i] > sortedOccurences[j]
	})
	if !changed && len(sortedOccurences) != 1 && len(sortedOccurences) != k {
		return []int{0}
	}
	res := []int{}
one:
	for i := 0; i < len(sortedOccurences); i++ {
		for number, occurences := range numOccurences {
			if sortedOccurences[i] == occurences {
				res = append(res, number)
				delete(numOccurences, number)
				if len(res) == k {
					break one
				}
			}
		}
	}
	return res
}

func main() {
	fmt.Println("Salam Aleikum")
}
