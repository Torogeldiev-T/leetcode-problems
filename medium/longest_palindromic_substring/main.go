package longestpalindromicsubstring

// package main

import (
	"fmt"
)

func longestPalindrome(s string) string {
	lngstPalindrome := ""
	for k := 0; k < len(s); k++ {
		var startIdx = -1
		var endIdx = -1
		for i, j := k, len(s)-1; i < j; j-- {
			if s[i] == s[j] {
				if startIdx == -1 {
					startIdx = i
					endIdx = j
				}
				i++
			} else {
				if startIdx != -1 {
					i = startIdx
					j = endIdx
				}
				startIdx = -1
				endIdx = -1
			}
		}
		if startIdx >= 0 && endIdx-startIdx+1 > len(lngstPalindrome) {
			lngstPalindrome = s[startIdx : endIdx+1]
		}
	}
	if len(lngstPalindrome) == 0 {
		return string(s[0])
	}
	return lngstPalindrome
}

func main() {
	fmt.Println("Salam Aleikum")
}
