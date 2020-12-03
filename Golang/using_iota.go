package  main

import "fmt"
const(
	errorspecialist = iota+5
	catspecialist
	dogspecialist  
	snakespecialist
)

func main(){
	var specialType int = catspecialist
	fmt.Printf("%v\n",specialType)
}