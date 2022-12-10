package longestpalindromicsubstring

import (
	"fmt"
	"testing"
)

func Test(t *testing.T) {
	testCases := []struct {
		input        string
		wantedAnswer string
	}{
		{
			input:        "babad",
			wantedAnswer: "bab",
		},
		{
			input:        "cbbd",
			wantedAnswer: "bb",
		}, {
			input:        "abb",
			wantedAnswer: "bb",
		}, {
			input:        "baubaba",
			wantedAnswer: "aba",
		}, {
			input:        "ccc",
			wantedAnswer: "ccc",
		}, {
			input:        "a",
			wantedAnswer: "a",
		}, {
			input:        "ab",
			wantedAnswer: "a",
		}, {
			input:        "aaaa",
			wantedAnswer: "aaaa",
		}, {
			input:        "abcba",
			wantedAnswer: "abcba",
		},
		{
			input:        "aacabdkacaa",
			wantedAnswer: "aca",
		}, {
			input:        "bacabab",
			wantedAnswer: "bacab",
		},
	}
	for i, tC := range testCases {
		t.Run(fmt.Sprint(i), func(t *testing.T) {
			result := longestPalindrome(tC.input)
			if result != tC.wantedAnswer {
				t.Errorf("wanted to see: %s, but got: %s", tC.wantedAnswer, result)
			}
		})
	}
}
