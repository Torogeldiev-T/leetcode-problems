package validpalindrome_test

import (
	"fmt"
	"testing"
)

func Test(t *testing.T) {
	testCases := []struct {
		input        string
		wantedAnswer bool
	}{
		{
			input:        "A man, a plan, a canal: Panama",
			wantedAnswer: true,
		},
		{
			input:        "race a car",
			wantedAnswer: false,
		},
		{
			input:        "cac",
			wantedAnswer: true,
		},
		{
			input:        "caac",
			wantedAnswer: true,
		},
		{
			input:        "cabc",
			wantedAnswer: false,
		},
		{
			input:        "Marge, let's \"[went].\" I await {news} telegram.",
			wantedAnswer: true,
		},
		{
			input:        "0p",
			wantedAnswer: false,
		},
	}
	for i, tC := range testCases {
		t.Run(fmt.Sprint(i), func(t *testing.T) {
			result := isPalindrome(tC.input)
			if result != tC.wantedAnswer {
				t.Errorf("wanted to see: %t, but got: %t", tC.wantedAnswer, result)
			}
		})
	}
}
