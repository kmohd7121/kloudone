package main
import "fmt"
func main(){
	var i interface{}="kloudone"
	switch i.(type){
	case int :
		fmt.Println("this is interger")
	case string:
		fmt.Println("this is string")
		default:
			fmt.Println("i dont no what it is")

	}
}