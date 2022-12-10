package reverseinteger

// package main

import (
	"fmt"
	"strconv"
)

func reverse(x int) int {
	var resStr string
	strX := strconv.Itoa(x)
	isNegative := false
	for i := len(strX) - 1; i >= 0; i-- {
		if string(strX[i]) == "-" {
			isNegative = true
			continue
		}
		resStr += string(strX[i])
	}
	if isNegative {
		resStr = "-" + resStr
	}
	res, err := strconv.Atoi(resStr)
	if err != nil {
		panic(err)
	}
	if res < -2147483647 || res > 2147483646 {
		return 0
	}
	return res
}

func main() {
	fmt.Println("Salam Aleikum")
}
