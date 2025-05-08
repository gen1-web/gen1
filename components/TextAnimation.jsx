"use client"

import { useEffect } from "react"

export default function TextAnimationScript() {
  useEffect(() => {
    // Function to check if an element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    // Function to animate text letter by letter
    function animateText() {
      const textElements = document.querySelectorAll(".animated-text")

      textElements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains("animating")) {
          element.classList.add("animating")

          const text = element.textContent
          element.textContent = ""
          element.style.visibility = "visible"

          // Create spans for each character
          for (let i = 0; i < text.length; i++) {
            const span = document.createElement("span")
            span.textContent = text[i]
            span.style.color = "transparent"
            span.style.transition = `color 50ms ease ${i * 20}ms`
            element.appendChild(span)
          }

          // Trigger animation after a small delay
          setTimeout(() => {
            const spans = element.querySelectorAll("span")
            spans.forEach((span) => {
              span.style.color = "white"
            })
          }, 100)
        }
      })
    }

    // Function to animate text letter by letter with interval
    function animateTextWithInterval() {
      const textElements = document.querySelectorAll(".animated-text")

      textElements.forEach((element) => {
        const text = element.textContent
        element.textContent = ""
        element.style.visibility = "visible"

        // Create spans for each character
        for (let i = 0; i < text.length; i++) {
          const span = document.createElement("span")
          span.textContent = text[i]
          span.style.color = "transparent"
          span.style.transition = `color 50ms ease ${i * 20}ms`
          element.appendChild(span)
        }

        // Trigger animation after a small delay
        setTimeout(() => {
          const spans = element.querySelectorAll("span")
          spans.forEach((span) => {
            span.style.color = "white"
          })
        }, 100)
      })
    }

    // Initial animation
    animateTextWithInterval()

    // Set interval for constant animation
    const intervalId = setInterval(animateTextWithInterval, 10000)

    // Cleanup
    return () => {
      clearInterval(intervalId)
      window.removeEventListener("scroll", animateText)
    }
  }, [])

  return null
}
