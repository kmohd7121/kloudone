package main
import ("fmt")
func main(){
	fmt.Println("start")
	defer fmt.Println("this is defer ")
	panic("somting bad happen")
	fmt.Println("end")

}