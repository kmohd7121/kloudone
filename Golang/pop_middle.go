package main

import "fmt"
func main(){
	a:=[]int {1,2,3,4,5}
	b:=append(a[:2],a[3:]...)
	fmt.Println(b)
}