package main
import ("fmt"
"time")
func main(){
	go sayhello()
	time.Sleep(100*time.Millisecond)
}
func sayhello(){
	fmt.Println("hello golang")
}