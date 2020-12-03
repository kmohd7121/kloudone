package main
import "fmt"
func main() {
	const a int = 14
	const b string = "foo"
	const c float32 = 3.14
	const d bool = true
	fmt.Printf("%v,%T\n",a,a)
	fmt.Printf("%v,%T\n",b,b)
	fmt.Printf("%v,%T\n",c,c)
	fmt.Printf("%v,%T\n",d,d)
}