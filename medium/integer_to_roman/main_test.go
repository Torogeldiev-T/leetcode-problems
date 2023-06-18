package integertoroman

import (
	"fmt"
	"testing"
)

func Test(t *testing.T) {
	testCases := []struct {
		input        int
		wantedAnswer string
	}{
		{
			input:        485,
			wantedAnswer: "CDLXXXV",
		},
		{
			input:        1994,
			wantedAnswer: "MCMXCIV",
		},
		{
			input:        58,
			wantedAnswer: "LVIII",
		},
		{
			input:        90,
			wantedAnswer: "XC",
		},
		{
			input:        9,
			wantedAnswer: "IX",
		},
	}
	for i, tC := range testCases {
		t.Run(fmt.Sprint(i), func(t *testing.T) {
			result := intToRoman(tC.input)
			if result != tC.wantedAnswer {
				t.Errorf("wanted to see: %s, but got: %s", tC.wantedAnswer, result)
			}
		})
	}
}
