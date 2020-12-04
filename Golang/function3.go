package main
import "fmt"
func main(){
	x:="hello!"
	y:="stacey"
	saymessage(x,y)
} 
func saymessage(msg string ,z string){
	fmt.Println(msg ,z)
}