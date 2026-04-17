import { ImageResponse } from 'next/og'

export const alt = 'Alfeco Foundation — Empowering Communities, Inspiring Change'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background:
            'linear-gradient(135deg, #C1272D 0%, #E8AB36 55%, #48B2A9 100%)',
          color: 'white',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            opacity: 0.95,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: 'rgba(255,255,255,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 38,
              fontWeight: 800,
            }}
          >
            A
          </div>
          Alfeco Foundation
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -3,
            }}
          >
            <div style={{ display: 'flex' }}>Empowering Communities.</div>
            <div style={{ display: 'flex' }}>Inspiring Change.</div>
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              opacity: 0.95,
              fontFamily: 'sans-serif',
            }}
          >
            Education · Food Security · Women &amp; Youth · Conservation
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
