package main
import "fmt"
func main(){
	fmt.Println("start")
	defer fmt.Println("this is defer ")
	fmt.Println("end") 
}