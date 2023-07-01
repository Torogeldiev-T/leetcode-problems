package main

import (
	"fmt"
	"sort"
	"strings"
)

func groupAnagrams(strs []string) [][]string {
	anagramMap := make(map[string][]string)
	for i := 0; i < len(strs); i++ {
		key := sortString(strs[i])
		anagrams := anagramMap[key]
		anagrams = append(anagrams, strs[i])
		anagramMap[key] = anagrams
	}
	result := make([][]string, len(anagramMap))
	idx := 0
	for _, anagrams := range anagramMap {
		result[idx] = anagrams
		idx++
	}
	return result

}

func sortString(s string) string {
	chars := strings.Split(s, "")
	sort.Slice(chars, func(i, j int) bool {
		return chars[i] < chars[j]
	})
	return strings.Join(chars, "")
}

func main() {
	fmt.Println("Salam Aleikum")
	groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat"})
}
