package containerwithmostwater

import (
	"fmt"
	"math"
)

func maxArea(heights []int) int {
	var maxArea = 0
	for i, j := 0, len(heights)-1; i < j; i, j = i+1, j-1 {
		minHeight := math.Min(float64(heights[i]), float64(heights[j]))
		area := int(minHeight) * (j - i)
		if area > maxArea || maxArea == 0 {
			maxArea = area
		}
		if heights[i] > heights[j] {
			i--
		} else if heights[i] < heights[j] {
			j++
		}

	}
	return maxArea
}

func main() {
	fmt.Println("Salam Aleikum")
}
