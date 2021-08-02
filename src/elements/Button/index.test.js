import React from 'react'
import { getByText, render } from '@testing-library/react'
import Button from './index'

test("should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>)

  expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

// test("should render loading/spinner", () => {
//   const { container } = render(<Button isLoading></Button>)

//   expect(getByText(/loading/i)).toBeInTheDocument()
//   expect(container.querySelector("span")).toBeInTheDocument()
// })

// test("should render <a> tag", () => {
//   const { container } = render(<Button type="link"></Button>)

//   expect(container.querySelector("a")).toBeInTheDocument()
// })