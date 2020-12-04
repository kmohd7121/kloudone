// using interface {} 

package main
import "fmt"
func main(){
	var i interface{} = 12.5
	switch i.(type){
	case int:
		fmt.Println("i is an int ")
	case float64:
		fmt.Println("i is an float")
	case string:
		fmt.Println("i is an string")
	default:
		fmt.Println("i is another type")
	}
}