package reverseinteger

import (
	"fmt"
	"testing"
)

func Test(t *testing.T) {
	testCases := []struct {
		input        int
		wantedAnswer int
	}{
		{
			input:        123,
			wantedAnswer: 321,
		},
		{
			input:        120,
			wantedAnswer: 21,
		}, {
			input:        -321,
			wantedAnswer: -123,
		},
		{
			input:        0,
			wantedAnswer: 0,
		},
	}
	for i, tC := range testCases {
		t.Run(fmt.Sprint(i), func(t *testing.T) {
			result := reverse(tC.input)
			if result != tC.wantedAnswer {
				t.Errorf("wanted to see: %d, but got: %d", tC.wantedAnswer, result)
			}
		})
	}
}
