package main

import (
	"fmt"
	"sort"
)

func threeSum(nums []int) [][]int {
	res := [][]int{}
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})
	counted := make(map[int]map[int]int)
	for i := 0; i < len(nums); i++ {
		for j, k := i+1, len(nums)-1; j < k; {
			if nums[j]+nums[k] < -nums[i] {
				j++
			} else if nums[j]+nums[k] > -nums[i] {
				k--
			} else {
				if counted[nums[i]] == nil {
					counted[nums[i]] = make(map[int]int)
				}
				if counted[nums[i]][nums[j]] != 1 {
					res = append(res, []int{nums[i], nums[j], nums[k]})
					counted[nums[i]][nums[j]] = 1
				}
				j++
				k--
			}
		}
	}
	return res
}

func main() {
	fmt.Println("Salam ALeikum")
}
