package containerwithmostwater

import (
	"fmt"
	"testing"
)

func Test(t *testing.T) {
	testCases := []struct {
		input        []int
		wantedAnswer int
	}{
		{
			input:        []int{1, 8, 6, 2, 5, 4, 8, 3, 7},
			wantedAnswer: 49,
		},
		{
			input:        []int{1, 1},
			wantedAnswer: 1,
		},
		{
			input:        []int{0, 2},
			wantedAnswer: 0,
		},
	}
	for i, tC := range testCases {
		t.Run(fmt.Sprint(i), func(t *testing.T) {
			result := maxArea(tC.input)
			if result != tC.wantedAnswer {
				t.Errorf("wanted to see: %d, but got: %d", tC.wantedAnswer, result)
			}
		})
	}
}
