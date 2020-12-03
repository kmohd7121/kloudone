package main
import "fmt"
func main() {
	a:=[]int {1,2,3,4,5,6,7,8,9,10}
	b:=a[:] //slice of all elements
	c:=a[3:] //slice from 4th elements
	d:=a[:6] //slice from 6th elements
	e:=a[3:6] //slice from 4th to 5th elements
	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
	fmt.Println(d)
	fmt.Println(e)
}