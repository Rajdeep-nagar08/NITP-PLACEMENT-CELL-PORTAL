import { NextResponse } from 'next/server'

export default function _middleware(req) {
  const { cookies } = req
  const token = cookies.token
  const url = req.url
  const nextUrl = req.nextUrl.clone()

  if (url.includes('/student/')) {
    if (token) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(nextUrl.origin)
    }
  }
  if (url.includes('/admin/')) {
    if (token) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(nextUrl.origin)
    }
  }
  if (url.includes('/coordinator/')) {
    if (token) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(nextUrl.origin)
    }
  }

  return NextResponse.next()
}
