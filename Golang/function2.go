package main
import "fmt"
func main(){
	for i:=0;i<5;i++{
		saymessage("hello go Program!",i)
	}
}
func saymessage(msg string, ind int){
	fmt.Println(msg)
	fmt.Println("the value of the index is :",ind)
} 