import React from 'react'
import "./glasscard.css";

export default function GlassCard({children}) {
  return (
    <div className="card">
      {children}
    </div>
  )
}
