import React from 'react'
import ReactDom from 'react-dom'
import Router from '@/router'
import './public/reset.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:9999/api'
import './public/fonts/iconfont.css'

ReactDom.render(<Router></Router>,document.getElementById('app'))
