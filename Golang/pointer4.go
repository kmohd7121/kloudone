package main
import "fmt"
func main(){
	var ms * mystruct
	ms = new (mystruct)
	(*ms).foo=42
	fmt.Println((*ms).foo)
}
type mystruct struct{
	foo int
}