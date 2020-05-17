package main

import (
	"net/http"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("../../static/", false)))
	r.LoadHTMLGlob("../../static/**/*.html")
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})
	// r.GET("/login", func(c *gin.Context) {
	// 	c.HTML(http.StatusOK, "login.html", nil)
	// })
	// admin := r.Group("/admin")
	// admin.GET("/", func(c *gin.Context) {
	// 	c.HTML(http.StatusOK, "admin-overview.html", nil)
	// })
	r.Run(":3000")
}
