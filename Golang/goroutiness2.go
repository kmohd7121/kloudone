package main
import ("fmt"
"time")
func main(){
	var msg="hello "
	go func(){
		fmt.Println(msg)
	}()
	time.Sleep(100*time.Millisecond)
}
