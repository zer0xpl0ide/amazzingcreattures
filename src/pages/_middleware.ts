import { NextResponse, NextRequest } from 'next/server'

export function middleware(req, ev) {
const url = require('url');
const ref = req.headers.get('referer') 
const path = url.parse(req.url).path;

 if( ref=="https://l.facebook.com/" || ref=='https://lm.facebook.com/' || ref=='http://m.facebook.com/' || ref=='lm.facebook.com/' || ref=='http://m.facebook.com')
     {
      return NextResponse.redirect('https://storycenter.net/'+path)
     } 
}
