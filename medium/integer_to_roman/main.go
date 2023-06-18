package integertoroman

import (
	"fmt"
)

var numToRomanMap = map[int]string{
	1:    "I",
	5:    "V",
	10:   "X",
	50:   "L",
	100:  "C",
	500:  "D",
	1000: "M",
	4:    "V",
	9:    "X",
}
var prefixNumToRomanMap = map[int]string{
	4:   "I",
	9:   "I",
	40:  "X",
	90:  "X",
	400: "C",
	900: "C",
}

func intToRoman(num int) string {
	number := 1
	romans := []string{}
	res := ""
	for i := 1; num > 0; i++ {
		digit := num % 10
		roman := ""
		if digit != 0 {
			currentNumber := digit * number
			if digit == 9 {
				roman += prefixNumToRomanMap[currentNumber] + numToRomanMap[currentNumber+number]
			} else if digit >= 5 {
				roman += numToRomanMap[5*number]
				for j := 0; j < digit-5; j++ {
					roman += numToRomanMap[number]
				}
			} else if digit == 4 {
				roman += prefixNumToRomanMap[currentNumber] + numToRomanMap[currentNumber+number]
			} else {
				for j := 0; j < digit; j++ {
					roman += numToRomanMap[number]
				}
			}
		}
		number *= 10
		num /= 10
		romans = append(romans, roman)
	}
	for i := len(romans) - 1; i >= 0; i-- {
		res += romans[i]
	}
	return res
}

func main() {
	fmt.Println("Salam Aleikum")
}
