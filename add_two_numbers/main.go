package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	head := new(ListNode)
	current := head
	carry := 0

	for i, j := l1, l2; i != nil || j != nil; {
		var sum int
		if i == nil && j != nil {
			sum = j.Val + carry
			j = j.Next
		} else if i != nil && j == nil {
			sum = i.Val + carry
			i = i.Next
		} else {
			sum = i.Val + j.Val + carry
			j = j.Next
			i = i.Next
		}
		digit := sum % 10
		if sum >= 10 {
			carry = 1
		} else {
			carry = 0
		}
		current.Next = &ListNode{digit, nil}
		current = current.Next

	}
	if carry == 1 {
		current.Next = &ListNode{carry, nil}
		current = current.Next
	}
	return head.Next
}
func main() {
	fmt.Println("Salam Aleikum")
}
