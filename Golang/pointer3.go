package main
import  "fmt"
func main(){
a:=[]int {1,2,3}
b:=&a[0]
c:=&a[1]
fmt.Printf("%v %p %p\n",a,b,c)
}
