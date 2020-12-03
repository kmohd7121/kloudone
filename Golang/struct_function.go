package main

import "fmt"
type Doctor struct{
	number int 
	actorName string
	Companions []string
}
func main(){
	aDoctor:=Doctor{
		number:3,
		actorName:"jon pertwe",
		Companions:[]string{
			"liza show",
			"jo grant",
			"search ja smith",
		},
	}
	fmt.Println(aDoctor)
}