package main
import ("fmt" 
		"sync"
	)
var wg =sync.WaitGroup{}
var counter=0
var m=sync.RWMutex{}
func main(){
	for i:=0;i<10;i++{
		wg.Add(2)
		go sayhello()
		go increment()
	}
	wg.Wait()

}
func sayhello(){
	fmt.Println("Hello",counter)
	wg.Done()
}
func increment(){
	counter++
	wg.Done()
}