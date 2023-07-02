package validpalindrome_test

import (
	"fmt"
	"regexp"
	"strings"
)

func isPalindrome(s string) bool {
	resS := ""
	for i := 0; i < len(s); i++ {
		if (s[i] >= 65 && s[i] <= 91) || (s[i] >= 97 && s[i] <= 122) {
			resS += strings.ToLower(string(s[i]))
		} else if s[i] >= 48 && s[i] <= 57 {
			resS += string(s[i])
		}
	}
	resS = regexp.MustCompile(`[^a-z0-9 ]+`).ReplaceAllString(resS, "")
	for i := 0; i < len(resS)/2; i++ {
		if resS[i] != resS[len(resS)-1-i] {
			return false
		}
	}
	return true
}
func main() {
	fmt.Println("Salam Aleikum")
}
