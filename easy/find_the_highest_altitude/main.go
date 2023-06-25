package findthehighestaltitude_test

import "fmt"

func largestAltitude(gain []int) int {
	sum := make([]int, len(gain)+1)
	sum[0] = 0
	max := sum[0]
	for i := 1; i <= len(gain); i++ {
		sum[i] += sum[i-1] + gain[i-1]
		if max < sum[i] {
			max = sum[i]
		}
	}
	return max
}
func main() {
	fmt.Println("Salam Aleikum")
}
