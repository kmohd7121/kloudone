package main
import "fmt"

func main(){
	for i,j:=0,0;i<5 || j<8;i,j=i+1,j+2{
		fmt.Println(i,j)
	}
}