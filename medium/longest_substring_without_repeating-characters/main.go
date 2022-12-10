package main

import (
	"fmt"
	"strings"
)

func lengthOfLongestSubstring(s string) int {
	longest := ""
	maxSize := 0
	for i := 0; i < len(s); i++ {
		sz := 0
		for j := i; j < len(s); j++ {
			if !strings.Contains(longest, string(s[j])) {
				longest += string(s[j])
				sz++
			} else {
				break
			}
		}
		if maxSize < sz {
			maxSize = sz
		}
		longest = ""
	}
	return maxSize
}

func main() {
	fmt.Println("Salam Aleikum")
}
