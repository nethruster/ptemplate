import React from 'react'

export default function (text) {
  return text
  .split('\n')
  .map((line, key) => <span key={key}>{line}<br /></span>)
}
