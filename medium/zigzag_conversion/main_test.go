package zigzagconversion

import (
	"fmt"
	"testing"
)

func Test(t *testing.T) {
	testCases := []struct {
		input struct {
			s         string
			numOfRows int
		}
		wantedAnswer string
	}{
		{
			input: struct {
				s         string
				numOfRows int
			}{"A", 1},
			wantedAnswer: "A",
		},
		{
			input: struct {
				s         string
				numOfRows int
			}{"AB", 1},
			wantedAnswer: "AB",
		},
	}
	for i, tC := range testCases {
		t.Run(fmt.Sprint(i), func(t *testing.T) {
			result := convert(tC.input.s, tC.input.numOfRows)
			if result != tC.wantedAnswer {
				t.Errorf("wanted to see: %s, but got: %s", tC.wantedAnswer, result)
			}
		})
	}
}
