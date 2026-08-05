// Shared Framer Motion variants used across the site.
// Keep easing + duration consistent so the whole site feels like one system.

export const EASE = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay }
  })
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1, ease: EASE, delay }
  })
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASE, delay }
  })
}

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren }
  }
})

export const imageReveal = {
  hidden: { clipPath: 'inset(0 0 100% 0)', scale: 1.1 },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    scale: 1,
    transition: { duration: 1.2, ease: EASE }
  }
}

export const textReveal = {
  hidden: { y: '110%' },
  visible: (delay = 0) => ({
    y: '0%',
    transition: { duration: 0.9, ease: EASE, delay }
  })
}

export const viewportOnce = { once: true, amount: 0.25 }
