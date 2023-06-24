package jumpgameii_test

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
			input:        []int{2, 3, 1, 1, 4},
			wantedAnswer: 2,
		},
		{
			input:        []int{2, 3, 0, 1, 4},
			wantedAnswer: 2,
		},
		{
			input:        []int{1},
			wantedAnswer: 0,
		},
		{
			input:        []int{2, 0, 2, 0, 1},
			wantedAnswer: 2,
		},
		// {
		// 	// 									3	 2	3	 2	1  0
		// 	input:        []int{1, 3, 1, 1, 5, 5},
		// 	wantedAnswer: 3,
		// },
	}
	for i, tC := range testCases {
		t.Run(fmt.Sprint(i), func(t *testing.T) {
			result := jump(tC.input)
			if result != tC.wantedAnswer {
				t.Errorf("wanted to see: %d, but got: %d", tC.wantedAnswer, result)
			}
		})
	}
}
