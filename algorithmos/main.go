package main 


func soma(x int, y int)  (int, bool) {
    if x > 20 {
		return x + y, true

	}
		return x + y, false
	
}

func main() {

	resultado, status := soma(10,20)
}


