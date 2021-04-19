package main

import (
	"log"
	"net/http"
)

func main() {
	
	fs := http.FileServer(http.Dir("./public/"))
	http.Handle("/", fs)
	// testDir()
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}