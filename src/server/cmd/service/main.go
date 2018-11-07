package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", serveSomething)

	log.Println("Listening...")
	http.ListenAndServe(":8890", Log(http.DefaultServeMux))
}

func serveSomething(w http.ResponseWriter, _ *http.Request) {
	w.Write([]byte("Hello!"))
}

func Log(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%s %s %s", r.RemoteAddr, r.Method, r.URL)
		handler.ServeHTTP(w, r)
	})
}
