package main

import (
	"fmt"
	"log"
	"net/http"
	"html/template"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	hello := []byte("Hello World!!!")
	_, err := w.Write(hello)
	if err != nil {
		log.Fatal(err)
	}
}

func viewHandler(w http.ResponseWriter, r *http.Request) {
	html, err := template.ParseFiles("test.html")
	if err != nil {
		log.Fatal(err)
	}
	if err := html.Execute(w, nil); err != nil {
		log.Fatal(err)
	}
}

func main() {
	http.HandleFunc("/hello", helloHandler)
	http.HandleFunc("/view", viewHandler)
	fmt.Println("Server Start Up")
	log.Fatal(http.ListenAndServe("localhost:8080", nil))
}