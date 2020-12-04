package main
import "fmt"
func main(){
	s:=[]int{1,2,30}
	// for v:=range s{
	// 	fmt.Println(s[v])
	// }
	for i:=0;i<len(s);i++{
		fmt.Println(s[i])
	}
}