import React from 'react'
import ReactDom from 'react-dom'
import Router from '@/router'
import './public/reset.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:9999/api'

ReactDom.render(<Router></Router>,document.getElementById('app'))
