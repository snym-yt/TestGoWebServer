package main

import (
	"fmt"
	"log"
	"net/http"
	"html/template"
	"os"
	"bufio"
)

type MessageList struct{
	Messages []string
}

func New(messages []string) *MessageList{
	return &MessageList{Messages: messages}
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	hello := []byte("Hello World!!!")
	_, err := w.Write(hello)
	if err != nil {
		log.Fatal(err)
	}
}

func viewHandler(w http.ResponseWriter, r *http.Request) {
	messageList := fileRead("read.txt");
	fmt.Println(messageList)
	html, err := template.ParseFiles("test.html")
	if err != nil {
		log.Fatal(err)
	}
	getMSGs := New(messageList)
	if err := html.Execute(w, getMSGs); err != nil {
		log.Fatal(err)
	}
}

func viewHandler_index(w http.ResponseWriter, r *http.Request) {
	html, err := template.ParseFiles("index.html")
	if err != nil {
		log.Fatal(err)
	}
	if err := html.Execute(w, nil); err != nil {
		log.Fatal(err)
	}
}

func fileRead(fileName string) []string {
	var messageList []string
	file, err := os.Open(fileName)
	if os.IsNotExist(err) {
		return nil
	}
	defer file.Close()
	scaner := bufio.NewScanner(file)
	for scaner.Scan() {
		messageList = append(messageList, scaner.Text())
	}
	return messageList
}

func main() {
	http.HandleFunc("/hello", helloHandler)
	fmt.Println("/hello stands")
	http.HandleFunc("/view", viewHandler)
	fmt.Println("/view stands")
	http.HandleFunc("/index", viewHandler_index)
	fmt.Println("/index stands")
	log.Fatal(http.ListenAndServe("localhost:8080", nil))
}