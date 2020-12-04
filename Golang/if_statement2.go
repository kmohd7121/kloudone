package main
import "fmt"
func main(){
	number:=50
	guess:=32
	if guess<number{
		fmt.Println("too low")
	}
	if guess > number{
		fmt.Println("too high")
	}
	if guess==number{
		fmt.Println("you got it")
	}
	fmt.Println(number<=guess,number>=guess,number!=guess)
}