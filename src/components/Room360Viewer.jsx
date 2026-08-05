import { useState, useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RotateCw, Pause, Play, Move } from 'lucide-react'

// Real photos captured while rotating through one room + its attached washroom.
// Dragging (or auto-rotating) steps through the sequence to fake a 360° tour.
const TOTAL_FRAMES = 10
const FRAMES = Array.from({ length: TOTAL_FRAMES }, (_, i) =>
  `/images/360-room/frame-${String(i + 1).padStart(2, '0')}.jpg`
)
const DRAG_SENSITIVITY = 18 // px of drag per frame step

export default function Room360Viewer() {
  const [frame, setFrame] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const dragState = useRef({ dragging: false, startX: 0, startFrame: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isPlaying) return
    const id = setInterval(() => {
      setFrame((f) => (f + 1) % TOTAL_FRAMES)
    }, 700)
    return () => clearInterval(id)
  }, [isPlaying])

  const stepTo = useCallback((clientX) => {
    const { startX, startFrame } = dragState.current
    const delta = clientX - startX
    const steps = Math.round(delta / DRAG_SENSITIVITY)
    let next = (startFrame - steps) % TOTAL_FRAMES
    if (next < 0) next += TOTAL_FRAMES
    setFrame(next)
  }, [])

  const onPointerDown = (e) => {
    setIsPlaying(false)
    setHasInteracted(true)
    dragState.current = {
      dragging: true,
      startX: e.clientX ?? e.touches?.[0]?.clientX ?? 0,
      startFrame: frame
    }
  }

  const onPointerMove = (e) => {
    if (!dragState.current.dragging) return
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0
    stepTo(clientX)
  }

  const endDrag = () => {
    dragState.current.dragging = false
  }

  return (
    <div className="flex flex-col gap-5">
      <div
        ref={containerRef}
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={endDrag}
        className="relative w-full max-w-3xl aspect-[4/3] md:aspect-video mx-auto rounded-card overflow-hidden select-none cursor-grab active:cursor-grabbing shadow-lift border border-white/10"
      >
        {FRAMES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`360 view of a Tawar PG room, angle ${i + 1} of ${TOTAL_FRAMES}`}
            draggable={false}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ${
              i === frame ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

        {/* Drag hint, shown until first interaction */}
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 glass rounded-pill px-5 py-2.5 flex items-center gap-2 text-bg text-xs font-button tracking-wide pointer-events-none"
          >
            <Move size={15} className="text-gold" /> Drag to look around
          </motion.div>
        )}

        {/* Controls */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-bg hover:text-gold transition-colors"
            aria-label={isPlaying ? 'Pause rotation' : 'Auto-rotate'}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            onClick={() => setFrame((f) => (f + 1) % TOTAL_FRAMES)}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-bg hover:text-gold transition-colors"
            aria-label="Rotate to next angle"
          >
            <RotateCw size={16} />
          </button>
        </div>

        <span className="absolute top-4 left-4 glass rounded-pill px-4 py-1.5 text-bg text-xs font-button tracking-wide">
          360° Room Walkthrough
        </span>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5">
        {FRAMES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIsPlaying(false); setHasInteracted(true); setFrame(i) }}
            aria-label={`Go to angle ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === frame ? 'w-6 bg-gold' : 'w-1.5 bg-bg/30 hover:bg-bg/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
