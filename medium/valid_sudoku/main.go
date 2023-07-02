package main

import "fmt"

func isValidSudoku(board [][]byte) bool {
	for i := 0; i < 9; i++ {
		if !validateColumn(i, board) {
			return false
		}
		if !validateRow(i, board) {
			return false
		}
	}
	return validateSubSquares(board)
}

func validateRow(row int, board [][]byte) bool {
	repeats := make(map[byte]bool)
	for i := 0; i < 9; i++ {
		ch := board[row][i]
		if !validateCh(ch, repeats) {
			return false
		}
	}
	return true
}

func validateColumn(col int, board [][]byte) bool {
	repeats := make(map[byte]bool)
	for i := 0; i < 9; i++ {
		ch := board[i][col]
		if !validateCh(ch, repeats) {
			return false
		}
	}
	return true
}
func validateSubSquares(board [][]byte) bool {

	for l := 0; l < 3; l++ {
		for i := 0; i < 3; i++ {
			repeats := make(map[byte]bool)
			for j := i * 3; j < i*3+3; j++ {
				for k := l * 3; k < l*3+3; k++ {
					ch := board[j][k]
					if !validateCh(ch, repeats) {
						return false
					}
				}
			}
		}
	}

	return true
}
func validateCh(ch byte, repeats map[byte]bool) bool {
	if ch != '.' {
		if repeats[ch] {
			return false
		}
		repeats[ch] = true
	}
	return true
}
func main() {
	fmt.Println("Salam Aleikum")
}
