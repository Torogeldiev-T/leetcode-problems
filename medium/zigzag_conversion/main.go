package zigzagconversion

// package main

import (
	"fmt"
)

func convert(s string, numRows int) string {
	zigzagMatrix := make([][]string, numRows)
	result := ""
	if numRows == 1 {
		return s
	}
	for i := 0; i < numRows; i++ {
		zigzagMatrix[i] = make([]string, len(s))
	}
	row, col := 0, 0
	isZigzag := false
	for chIdx := 0; chIdx < len(s); chIdx++ {
		zigzagMatrix[row][col] = string(s[chIdx])

		if row == numRows-1 {
			isZigzag = true
		} else if col%(numRows-1) == 0 {
			isZigzag = false
		}

		if isZigzag {
			col++
			row--
		} else {
			row++
		}

	}
	for i := 0; i < numRows; i++ {
		for j := 0; j < len(zigzagMatrix[i]); j++ {
			if zigzagMatrix[i][j] != "" {
				result += string(zigzagMatrix[i][j])
			}
		}
	}
	return result
}

func main() {
	fmt.Println("Salam Aleikum")
}
