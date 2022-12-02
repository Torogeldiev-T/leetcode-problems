package main

import (
	"fmt"
)

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	var merge []int
	for i, j := 0, 0; i < len(nums1) || j < len(nums2); {
		if (i >= len(nums1)) || (j < len(nums2) && nums1[i] > nums2[j]) {
			merge = append(merge, nums2[j])
			j++
		} else if j >= len(nums2) || (i < len(nums1) && nums1[i] < nums2[j]) {
			merge = append(merge, nums1[i])
			i++
		} else {
			merge = append(merge, nums2[j])
			merge = append(merge, nums2[j])
			i++
			j++
		}
	}
	if len(merge)%2 == 0 {
		median := float64(merge[len(merge)/2] + merge[len(merge)/2-1])
		return median / 2.0
	} else {
		return float64(merge[len(merge)/2])
	}

}

func main() {
	fmt.Println("Salam Aleikum")
}
