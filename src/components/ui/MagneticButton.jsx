import { useRef } from 'react'
import gsap from 'gsap'

/**
 * Wraps any button/link and applies a subtle magnetic pull toward the cursor.
 * Usage: <MagneticButton as="a" href="#contact" className="btn-gold">Book a Visit</MagneticButton>
 */
export default function MagneticButton({
  as: Component = 'button',
  className = '',
  children,
  strength = 0.35,
  ...props
}) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)

    gsap.to(el, {
      x: x * strength,
      y: y * strength,
      duration: 0.5,
      ease: 'power3.out'
    })
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
  }

  return (
    <Component
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Component>
  )
}
