package containsduplicate_test

import (
	"fmt"
	"testing"
)

func Test(t *testing.T) {
	testCases := []struct {
		input        []int
		wantedAnswer bool
	}{
		{
			input:        []int{1, 2, 3, 1},
			wantedAnswer: true,
		},
		{
			input:        []int{1, 2, 3, 4},
			wantedAnswer: false,
		},
		{
			input:        []int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2},
			wantedAnswer: true,
		},
	}
	for i, tC := range testCases {
		t.Run(fmt.Sprint(i), func(t *testing.T) {
			result := containsDuplicate(tC.input)
			if result != tC.wantedAnswer {
				t.Errorf("wanted to see: %t, but got: %t", tC.wantedAnswer, result)
			}
		})
	}
}
