package main

import (
    "fmt"
    "os"
)

// func main() {
//     // ファイル名を指定
//     fileName := "output.txt"
    
//     // ファイルを作成または開く（書き込みモード）
//     file, err := os.Create(fileName)
//     if err != nil {
//         fmt.Println("ファイルを作成できませんでした:", err)
//         return
//     }
//     defer file.Close()

//     // ファイルに「Complete」を書き込む
//     _, err = file.WriteString("Complete\n")
//     if err != nil {
//         fmt.Println("ファイルに書き込めませんでした:", err)
//         return
//     }

//     fmt.Println("output.txtに「Complete」を書き込みました")
// }
