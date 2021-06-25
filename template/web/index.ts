import { hello } from "../apis/hello"
  ;
(async () => alert(await hello('world')))()

// @ts-ignore for hot reload 
import.meta.webpackHot && import.meta.webpackHot.accept()
