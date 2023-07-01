package validanagram_test

import (
	"fmt"
)

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	sAngrm := make(map[byte]int)
	tAngrm := make(map[byte]int)

	for i := 0; i < len(s); i++ {
		sAngrm[s[i]]++
	}
	for i := 0; i < len(t); i++ {
		tAngrm[t[i]]++
	}

	if len(sAngrm) != len(tAngrm) {
		return false
	}

	for i := 97; i < 123; i++ {
		if sAngrm[byte(i)] != tAngrm[byte(i)] {
			return false
		}
	}

	return true
}

func main() {
	fmt.Println("Salam Aleikum")
}
