package main

import (
	"log"
	"net/http"
)

var key string
func main() {
	key = "PsYZx_ytmsyh6xVX1nij18RDl9QFP7k-TOCyrETt2W1t6fhPGXTOJ80t1k-eC89u"
	fs := http.FileServer(http.Dir("./public/"))
	http.Handle("/", fs)
	// testDir()
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}

func testDir() {
	d := http.Dir("./public/")
	f, err := d.Open("index.html")
	if err != nil {
		panic(err)
	}
	fs, err := f.Stat()
	if err != nil {
		panic(err)
	}
	log.Print(fs)
}