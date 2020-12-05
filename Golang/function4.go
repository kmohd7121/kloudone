package main
import "fmt"
func main(){
	var divide func(float64, float64)(float64,error)
	divide = func(a,b float64)(float64,error)
	if b ==0.0{
		return 0.0,fmt.Errorf("Cannot divide by zero\n")
	}
	else{
		return a/b,nil
	}

}
