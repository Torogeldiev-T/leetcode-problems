package main

import "fmt"

type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

func copyNode(node* TreeNode) *TreeNode {
	if node == nil {
		return nil 
	}
	return &TreeNode{Val: node.Val, Left: node.Left, Right: node.Right}
}

func invertTree(root *TreeNode) *TreeNode {
	invertedRoot := copyNode(root)
	traverseInOrder(invertedRoot)

	return invertedRoot
}

func traverseInOrder(root* TreeNode) *TreeNode {
	if root == nil {
		return nil
	}

	leftNode := copyNode(root.Left)
	rightNode := copyNode(root.Right)
	
	root.Left = rightNode
	root.Right = leftNode
	
	traverseInOrder(root.Left)
	traverseInOrder(root.Right)
	
	return root
}
func main() {
	fmt.Println("Salam Aleikum")
}
