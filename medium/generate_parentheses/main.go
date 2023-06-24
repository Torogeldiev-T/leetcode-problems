package main

import (
	"fmt"
)

func generateParenthesis(n int) []string {
	result := []string{}

	generate("(", 1, 0, &result, n*2)
	return result
}

func generate(step string, openingCount int, closingCount int, result *[]string, length int) {
	if len(step) < length {
		if openingCount == closingCount {
			generate(step+"(", openingCount+1, closingCount, result, length)
		} else if openingCount > closingCount {
			generate(step+")", openingCount, closingCount+1, result, length)
			if openingCount < length/2 {
				generate(step+"(", openingCount+1, closingCount, result, length)
			}
		}
	} else if len(step) == length {
		*result = append(*result, step)
	}
}

func main() {
	fmt.Println("Salam Aleikum")
}
