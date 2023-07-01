package validanagram_test

import (
	"fmt"
	"testing"
)

func Test(t *testing.T) {
	testCases := []struct {
		s            string
		t            string
		wantedAnswer bool
	}{
		{
			s:            "anagram",
			t:            "nagaram",
			wantedAnswer: true,
		},
		{
			s:            "rat",
			t:            "car",
			wantedAnswer: false,
		},
	}
	for i, tC := range testCases {
		t.Run(fmt.Sprint(i), func(t *testing.T) {
			result := isAnagram(tC.s, tC.t)
			if result != tC.wantedAnswer {
				t.Errorf("wanted to see: %t, but got: %t", tC.wantedAnswer, result)
			}
		})
	}
}
