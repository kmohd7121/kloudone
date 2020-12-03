package main

import "fmt"
func main(){
	a:=[]int {}
	fmt.Println(a)
	fmt.Printf("Length :%v\n",len(a))
	a=append(a,1)
	a=append(a,2)
	fmt.Println(a)
	fmt.Printf("Length :%v\n",len(a))
}