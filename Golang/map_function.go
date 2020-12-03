package main

import "fmt"
func main(){
	statepopulation:=map[string]int{
		"delgi":123456789,
		"gorakhpur":12345678,
		"lucknow":1234567,
		"punjab":7588458,
		"goa":54741111,
		"channi":8574255,
	}
	fmt.Println("\n",statepopulation)
}
//for add new element in map
statepopulation["japan"]=547885

// for removing element to map using pop
pop :=statepopulation["japan"]