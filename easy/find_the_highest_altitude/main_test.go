package findthehighestaltitude_test

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
			input:        []int{-5, 1, 5, 0, -7},
			wantedAnswer: 1,
		},
		{
			input:        []int{-4, -3, -2, -1, 4, 3, 2},
			wantedAnswer: 0,
		},
	}
	for i, tC := range testCases {
		t.Run(fmt.Sprint(i), func(t *testing.T) {
			result := largestAltitude(tC.input)
			if result != tC.wantedAnswer {
				t.Errorf("wanted to see: %d, but got: %d", tC.wantedAnswer, result)
			}
		})
	}
}
